import React from 'react';
import {  Input, Button, Card } from 'antd';
import { UserOutlined, LockOutlined, } from '@ant-design/icons';
import './index.css'



export default function LoginForm(props) {


  /****************************** */
  const {
    email,
    password,
    setEmail,
    setPassord,
    handleLogin,
    emailError,
    passwordError } = props;

  return (
    <div className="login-wrapper">
      <Card
        title='Management Login'
        className='login'
      >
        <Input
          type="text"
          placeholder="Username(admin@admin.com)"
          prefix={<UserOutlined className="site-form-item-icon" />}
          required
          value={email}
          onChange={e => setEmail(e.target.value)} />
        <p>{emailError}</p>

        <Input
          type="password"
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="Password(admin123)"
          required
          value={password}
          onChange={e => setPassord(e.target.value)} />
        <p>{passwordError}</p>
        <div className="buttonContainer">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={handleLogin}>Sign in
          </Button>
        </div>

      </Card >
    </div >



  )
}
