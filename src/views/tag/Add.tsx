import React, { Component } from 'react'
import { Input, Button, Form, Modal } from "antd";
import { FormComponentProps } from 'antd/es/form';
import { _addTag } from "../../apis/tag"

type RefreshTag = () => void

interface IState {
  visible: boolean
  confirmLoading: boolean
  name: string
}

interface IProps extends FormComponentProps {
  refresh: RefreshTag
}

class TagAddContent extends Component<IProps, IState> {

  public state = {
    visible: false,
    confirmLoading: false,
    name: ''
  }

  public render() {
    const { visible, confirmLoading } = this.state
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          新建标签
        </Button>
        <Modal
          title="添加标签"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <Form>
            <Form.Item>
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Please input name!' }],
              })(
                <Input 
                  placeholder="新建标签名"
                />,
              )}
            </Form.Item>
          </Form>
        </Modal>
      </div>
    )
  }

  private handleCancel = () => {
    this.setState({
      visible: false
    })
  }

  private handleOk = () => {
    this.handleSubmit()
  }

  private showModal = () => {
    this.setState({
      visible: true
    })
  }

  private handleSubmit = () => {
    this.props.form.validateFields( async (err: Error, values: string) => {
      if (!err) {
        console.log('Received values of form: ', values);
        try {
          await _addTag(values)
          this.props.refresh()
        } catch (error) {
          console.error(error)
        }
        
      }
    });
  };
}

const TagAdd = Form.create<IProps>({ name: 'tag_add' })(TagAddContent);
export default TagAdd;