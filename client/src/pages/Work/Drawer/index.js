import React, { useState } from 'react';
import Customer from '../../Customer/inputForm';
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

export default function DrawerForm() {

  const [visible, setVisible] = useState('')
  function showDrawer() {
    setVisible({
      visible: true,
    });
  };

  function onClose() {
    setVisible({
      visible: false,
    });
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        <PlusOutlined /> New account
        </Button>
      <Drawer
        title="Create a new account"
        width={'80%'}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div
            style={{
              textAlign: 'right',
            }}
          >
            <Button onClick={onClose} style={{ marginRight: 8 }}>
              Cancel
              </Button>
            <Button onClick={onClose} type="primary">
              Submit
              </Button>
          </div>
        }
      >
        <Customer />
      </Drawer>
    </>
  )
}
