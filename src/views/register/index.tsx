import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {Form, Input, Icon, Button} from 'antd';
import {Wrapper} from './style';
import { _register } from '../../apis/user/index';

const Item = Form.Item;
export interface LProps {
  form: any
}

class RegisterForm extends Component<LProps> {
  
  public render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Wrapper>
        <Form onSubmit={this.handleSubmit}>
          <Item>
            {
              getFieldDecorator('username', {
                rules: [{required: true, message: 'Please input your username'}]
              })(
                <Input
                  placeholder="Username"
                  prefix={
                    <Icon style={{ color: 'rgba(0,0,0,.25)' }}
                      type="user"
                    />
                  }
                />
              )
            }
          </Item>
          <Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }]
            })(
              <Input
                placeholder="Password"
                prefix={
                  <Icon
                    style={{ color: 'rgba(0,0,0,.25)' }}
                    type="lock"
                  />
                }
                type="password"
              />
            )}
          </Item>
          <Item>
            <Button
              className="login-form-button"
              htmlType="submit"
              type="primary"
            >
            Register
            </Button>
            <Link className="light small" to="/login">已有账号，去登录</Link>
          </Item>
        </Form>
      </Wrapper>
    );
  }

  private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.form.validateFields((err: Error, values: string) => {
      if (!err) {
        console.log('Received values of form: ', values);
        _register(values);
      }
    });
  };
}

const Register = Form.create({ name: 'normal_register' })(RegisterForm);
export default Register;