import React, { useState, useEffect } from 'react';
import { DatePicker, Input, Form, Select, Button, InputNumber, message } from 'antd';
import API from '../../../utils/API';
import Header from '../Header';
import moment from 'moment';

import './index.css'

const { TextArea } = Input;

export default function Recurring() {

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
    console.log(selected)
    setSelect({
      id: selected.key,
      value: selected.label
    })
  }


  function handleSave(value) {
    const newJob = {
      type: 'Recurring',
      startDate: value.date,
      description: value.description,
      price: value.price,
      reapts: value.reapts,
      asigned: false
    }
    API.saveJob(newJob)
      .then(res => {
        message.success('Saved')
        console.log(res.data)
        API.addJobToCustomer(select.id, res.data._id)
      })
      .catch((err) => console.log(err.response))

  }


  return (
    <Form className="recurring"
      form={form}
      name="jobInfo"
      onFinish={handleSave}
    >
      <Form.Item

        name="company">
        <Header
          clientList={clientData}
          handleSelectChange={handleSelectChange}
        />
      </Form.Item>

      <h3>Job Start Date</h3>
      <Form.Item
        rules={[
          {
            required: true,
            message: "Please select a date",
          },
        ]}
        name="date">

        <DatePicker
          className="data"
          disabledDate={(current) => current && current < moment().endOf('day')}
        />
      </Form.Item>

      <h3>Reapts</h3>
      <Form.Item name="reapts">
        <Select
          className="reapts"
          placeholder="Weekly on weekend">
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
        <InputNumber min={0} step={0.1} />
      </Form.Item>

      <h3>Job Description</h3>
      <Form.Item name="description">
        <TextArea rows={5} className="text" />
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
