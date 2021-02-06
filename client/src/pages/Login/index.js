import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Card, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './index.css'

export default function Login() {
  const user = {
    userName: 'admin',
    password: 'admin123'
  }

  const [loginInfo, setIsLogin] = useState({ isLogin: false, message: '' })
  const [userInfo, setUserInfo] = useState({ userName: '', password: '' })


  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    setUserInfo(values)
  };

  function passport() {
    if (user.userName === userInfo.userName || user.password === userInfo.password) {
      setIsLogin({ isLogin: true, message: 'Success' })
    }
    else setIsLogin({ isLogin: false, message: 'Try again' })
  }

  console.log(userInfo)
  return (
    <Card
      title='Management Login'
      className='login'
    >
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
        </Button>
        </Form.Item>
      </Form>
    </Card>

  )
}
