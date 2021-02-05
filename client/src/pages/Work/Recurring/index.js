import React, { useState, useEffect } from 'react';
import { DatePicker, Input, Form, Select, Button, InputNumber } from 'antd';
import API from '../../../utils/API';
import Header from '../Header';

import './index.css'

const { TextArea } = Input;

export default function Recurring() {

  const [clientData, setClientData] = useState([]);
  const [form] = Form.useForm();

  useEffect(() => {
    getClients()
  }, []);

  function getClients() {
    API.getCustomers()
      .then(res => {
        console.log(res)
        if (res) {
          setClientData(res.data)
        }
      })
      .catch(err => { console.log(err) })
  }



  function handleSave(value) {
    const newJob = {
      type: 'recurring',
      startDate: value.date,
      description: value.description,
      price: value.price,
      reapts: value.reapts
    }
    console.log(newJob)
    API.saveCustomer(newJob)
      .then(res => {

      })
      .catch((err) => console.log(err.response))
    console.log(value)
  }


  return (
    <Form
      form={form}
      name="jobInfo"
      onFinish={handleSave}
    >
      <Form.Item
        name="company">
        <Header clientList={clientData} />
      </Form.Item>

      <h3>Job Start Date</h3>
      <Form.Item name="date">
        <DatePicker />
      </Form.Item>

      <h3>Reapts</h3>
      <Form.Item name="reapts">
        <Select placeholder="Weekly on weekend">
          <Select.Option
            value="Weekly on weekend">
            Weekly on weekend
        </Select.Option>
          <Select.Option
            value="Twice a week">
            Twice a week
        </Select.Option>
          <Select.Option
            value="Once fortnight">
            Once fortnight
        </Select.Option>
        </Select>
      </Form.Item>

      <h3>Price</h3>
      <Form.Item name="price">
        <InputNumber min={0} max={10} step={0.1} />
      </Form.Item>

      <h3>Job Description</h3>
      <Form.Item name="description">
        <TextArea rows={5} />
      </Form.Item>
      <Form.Item >
        <Button
          className="ant-btn ant-btn-primary"
          htmlType="submit"
          size={'middle'}>
          Save
          </Button>
      </Form.Item>
    </Form>
  )
}
