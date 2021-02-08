import React from 'react';
import { Row } from 'antd';
import {  BarcodeOutlined } from '@ant-design/icons'

export default function Logo() {
  return (
    <div className="logo">
      <Row>
        <BarcodeOutlined /><BarcodeOutlined /><span className="welcome">Welcome</span>
      </Row>
      <Row><span className="manage">Management</span></Row>

    </div>
  )
}
