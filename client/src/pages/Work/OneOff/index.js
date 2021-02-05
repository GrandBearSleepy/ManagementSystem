import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { DatePicker, Input, Form, Button, InputNumber } from 'antd';
import API from '../../../utils/API';
import Header from '../Header';
import './index.css'

const { TextArea } = Input;



export default function OneOff() {

  const [select, setSelect] = useState({ id: '', value: '' });
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

  function handleSelectChange(selected) {
    // console.log(selected)
    setSelect({
      id: selected.key,
      value: selected.label
    })
  }

  function handleSave(value) {
    console.log(value)
    const newJob = {
      job:
      {
        type: 'OneOff',
        startDate: value.date,
        description: value.description,
        reapts: '',
        price: value.price
      }
    }
    API.updateCustomer(select.id, newJob)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      }
      )
  }

  return (
    <Form
      form={form}
      name="jobInfo"
      onFinish={handleSave}
    >
      <Form.Item
        rules={[
          {
            required: true,
            message: "Please select a client",
          },
        ]}
        name="company">
        <Header
          handleSelectChange={handleSelectChange}
          clientList={clientData} />
      </Form.Item>
      <h3>Job Date</h3>
      <Form.Item
        name="date"
        rules={[
          {
            required: true,
            message: "Please select a date",
          },
        ]}
      >
        <DatePicker
          disabledDate={(current) => current && current < moment().endOf('day')}
        />
      </Form.Item>
      <h3>Price</h3>
      <Form.Item name="price">
        <InputNumber
          min={0} step={0.1}
          placeholder="00.0" />
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
