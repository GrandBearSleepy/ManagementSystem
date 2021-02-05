import React, { useState, useEffect } from 'react';
import { DatePicker, Input, Form, Button, InputNumber } from 'antd';
import API from '../../../utils/API';
import Header from '../Header';
import './index.css'

const { TextArea } = Input;



export default function OneOff() {

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




  async function handleSave(value) {
    console.log(value)
    const newJob = {
      companyName: value.company,
      type: 'oneoff',
      startDate: value.date,
      description: value.description,
      reapts: value.reapts,
      price: value.price
    }
    console.log(newJob)

    // await API.getCustomer()
    //   .then(res => {
    //     if (res.data) {
    //       API.saveCustomer(newJob)
    //         .then(res => {

    //         })
    //         .catch((err) => console.log(err.response))
    //       console.log(value)
    //     }
    //   })

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
      <h3>Job Date</h3>
      <Form.Item name="date">
        <DatePicker />
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
