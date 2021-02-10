import React from 'react';
import { Form, Input, Button, Card, Alert } from 'antd';
import { UserOutlined, LockOutlined, } from '@ant-design/icons';
import './index.css'



export default function LoginForm(props) {

  const onFinish = (values) => {

    props.inputInfo(values)
  };


  // console.log(userInfo)
  return (
    <div className="login-wrapper">
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
          className="password"
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        {(props.error !== '') ? (<Alert message={props.error} type="error" showIcon />):''}
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
        </Button>
        </Form.Item>
      </Form>
    </Card>
    </div>

   

  )
}
