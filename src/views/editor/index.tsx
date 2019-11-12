import React, { Component } from 'react'
import { Input, Form, Button, Select, Spin } from 'antd'
import { FormComponentProps } from 'antd/es/form'
import Markdown from "react-markdown"
import CodeBlock from '../../components/codeBlock/index'
import { Tag } from "../../models/tag";
import { _addArticle } from "../../apis/article/index"
import { _searchTag } from "../../apis/tag/index"
import { Wrapper } from './style'

const Item = Form.Item
const { TextArea } = Input
const { Option } = Select

interface Props extends FormComponentProps {
  form: any,
  title: string,
  content: string
}

interface State {
  content: string,
  language: string,
  loading: boolean,
  tags: Array<Tag>
}


class EditorForm extends Component<Props, State> {

  public state = {
    content: '',
    language: '',
    loading: false,
    tags: []
  }

  public componentDidMount () {
    this.getTags()
  }

  public changeContent = (e:React.ChangeEvent<HTMLTextAreaElement>):void => {
    const { value } = e.target
    this.setState({
      content: value
    })
  }

  public handleChange = (value: any):void => {
    console.log(`selected ${value}`);
  }
 
  public render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Wrapper>
        <Spin
          spinning={this.state.loading}
          tip="Loading..."
        >
          <Form onSubmit={this.publish}>
            <article>
              <header>
                <Item label="标 题" hasFeedback>
                {getFieldDecorator('title', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your title!',
                    },
                  ],
                })(<Input />)}
                </Item>
              </header>
              <div className="content-wrapper">
                <Item label="内 容" className="write">
                  {
                    getFieldDecorator('content', {
                      rules: [
                        {
                          required: true,
                          message: 'Please input your content!',
                        },
                      ],
                    })(
                      <TextArea 
                        onChange={this.changeContent} 
                        autosize={{minRows: 20}}
                      ></TextArea>
                    )
                  }
                </Item>
                <div className="read">
                  <div className="title">
                    文本预览: 
                  </div>
                  <Markdown
                    source={this.state.content}
                    escapeHtml={false}
                    renderers={{
                      code: CodeBlock
                    }}
                  />
                </div>
              
              </div>
              <Item label="标 题" hasFeedback>
                {
                  getFieldDecorator('tags', {
                    initialValue: [],
                    rules: [
                      {
                        required: true,
                        message: 'Please change your tags!'
                      },
                    ]
                  })(
                    <Select
                        mode="multiple"
                        style={{ width: '100%' }}
                        placeholder="Please select"
                        onChange={this.handleChange}
                      >
                        {
                          this.state.tags.map((item:Tag) => (
                            <Option key={item.id}>{item.name}</Option>
                          ))
                        }
                    </Select>
                  )
                }
              </Item>
              <footer>
                  <Button type="primary" htmlType="submit">发 布</Button>
                  <Button>保 存</Button>
              </footer>
            </article>
          </Form>
        </Spin>
      </Wrapper>
    )
  }

  private publish = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.form.validateFields(async (err: Error, values: string) => {
      if (!err) {
        this.setState({
          loading: true
        });
        try {
          await _addArticle(values);
          this.setState({
            loading: false
          });
        } catch (e) {
          this.setState({
            loading: false
          });
        }

      }
    });
  };

  private getTags = async () => {
    try {
      const resp = await _searchTag()
      console.log(resp)
      this.setState({
        tags: resp.data
      })
    } catch (e) {
      console.log(e)
    }
  }
}

const Editor = Form.create({ name: 'editor' })(EditorForm);

export default Editor