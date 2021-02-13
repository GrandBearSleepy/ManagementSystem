import React from 'react';
import { Result, Button } from 'antd';

export default function Buiding() {
  return (
    <Result
      status="warning"
      title="Building...... More functions are coming......"
      extra={
        <Button type="primary" key="console">
          Go Console
      </Button>
      }
    />
  )
}
