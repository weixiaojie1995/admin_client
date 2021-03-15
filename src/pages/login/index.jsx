import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './index.scss'
import logo from './../../assets/images/logo.png'


export default class Login extends Component {
  onFinish = (values) => {
    console.log('Success:', values);
    
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  render() {

    return (
      <div className='login'>
        <header className='login-header'>
          <img src={logo} alt="" />
          <h3>React后台管理项目</h3>
        </header>
        <div className='login-content'>
          <h3>用户登录</h3>
          <Form
            name="normal_login"
            initialValues={{ remember: true, }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            className='login-form'
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: '请输入用户名！' }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" style={{ color: 'rgba(0,0,0,0.25)' }} />}
                placeholder="用户名"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: '请输入密码！' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" style={{ color: 'rgba(0,0,0,0.25)' }} />}
                type="password"
                placeholder="密码"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className='login-form-button'>登录</Button>
            </Form.Item>

          </Form>
        </div>
      </div>
    )
  }
}
