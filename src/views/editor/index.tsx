import React, { Component } from 'react'
import { Input, Form, Button, Select, Spin } from 'antd'
import { FormComponentProps } from 'antd/es/form'
import { Tag } from "../../models/tag";
import { _addArticle } from "../../apis/article/index"
import { _searchTag } from "../../apis/tag/index"
import { Wrapper } from './style'
import SimpleMDE from "simplemde";
import "simplemde/dist/simplemde.min.css"

const Item = Form.Item
const { Option } = Select

interface Props extends FormComponentProps {
  form: any,
  title: string
}

interface State {
  language: string,
  loading: boolean,
  tags: Array<Tag>,
  editor: any
}


class EditorForm extends Component<Props, State> {

  public state = {
    language: '',
    loading: false,
    tags: [],
    editor: {
      value: () => ''
    }
  }

  public componentDidMount () {
    this.getTags()
    this.initEditor()
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
              <Item label="标 题">
                {getFieldDecorator('content', {
                  rules: [{
                    message: 'Please input your content'
                  }, {
                    validator: this.normContent
                  }]

                })(<textarea className="editor" />)}
                
              </Item>
              <Item label="标 签">
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
    this.props.form.validateFields(async (err: Error, values: object) => {
      if (!err) {
        this.setState({
          loading: true
        });
        let content = this.state.editor.value()
        try {
          await _addArticle({
            ...values, content
          });
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
  private normContent = (rule:any, value:any, callback:any) => {
    let content = this.state.editor ? (this.state.editor.value ? this.state.editor.value() : '') : ''

    if (!content) {
      callback("Please input content")
    }
    callback()
  }

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

  private initEditor = () => {
    let editor = new SimpleMDE({
      element: document.getElementById("editor") || undefined
    })
    this.setState({
      editor
    })
  }
}

const Editor = Form.create({ name: 'editor' })(EditorForm);

export default Editor