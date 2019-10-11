import React, { Component } from 'react';
import { Form, Input, Icon, Button, Spin } from 'antd';

import { Link, Redirect } from 'react-router-dom'
import { Wrapper } from './style';
import { _login } from '../../apis/user/index';

const Item = Form.Item;
export interface IProps {
  form: any
}

export interface IState {
  loginSuccess: boolean,
  loading: boolean
}

class LoginForm extends Component<IProps, IState> {
  
  public state = {
    loginSuccess: false,
    loading: false
  }

  public render() {
    const { getFieldDecorator } = this.props.form;
    if (this.state.loginSuccess) {
      return <Redirect to="/front"></Redirect>;
    }
    return (
      <Wrapper>
        <Spin
          spinning={this.state.loading}
          tip="Loading..."
        >
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
              <Link className="light small" to="/login">未有账号，去注册</Link>
            </Item>
          </Form>
        </Spin>
      </Wrapper>
    );
  }

  private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.form.validateFields(async (err: Error, values: string) => {
      if (!err) {
        this.setState({
          loading: true
        });
        try {
          await _login(values);
          this.setState({
            loginSuccess: true,
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
}

const Login = Form.create({ name: 'normal_login' })(LoginForm);
export default Login;