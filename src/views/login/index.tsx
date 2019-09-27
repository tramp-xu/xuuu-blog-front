import React, { Component } from 'react';
import {Form, Input, Icon, Button} from 'antd';
import {Wrapper} from './style';
import { _login } from '../../apis/login/index';

const Item = Form.Item;
export interface LProps {
  form: any
}
class LoginForm extends Component<LProps> {
  public handleSubmit = (e:any) => {
    e.preventDefault();
    this.props.form.validateFields((err: Error, values: string) => {
      if (!err) {
        console.log('Received values of form: ', values);
        _login(values);
      }
    });
  };
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
            Log in
            </Button>
          </Item>
        </Form>
      </Wrapper>
    );
  }
}

const Login = Form.create({ name: 'normal_login' })(LoginForm);
export default Login;