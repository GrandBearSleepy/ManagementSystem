import React from 'react';
import './inputForm.css';
import API from '../../utils/API'
import {
  Form,
  Input,
  Select,
  Row,
  Col,
  Button,
  Card,
  message
}
  from 'antd';



export default function InputForm() {

  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };


  function handleSave(value) {
    const newCustomer = {
      title: value.title,
      firstName: value.firstName,
      lastName: value.lastName,
      fullName: value.firstName + ' ' + value.lastName,
      contactNum: value.phone,
      email: value.email,
      companyName: (value.company) ? value.company : (value.firstName + ' ' + value.lastName),
      address: value.street1
        + ' '
        + value.street2
        + ' '
        + value.cityName
        + ' '
        + value.stateName,
      job: {}
    }
    console.log(newCustomer)
    API.saveCustomer(newCustomer)
      .then(res => {
        return (
          message.success('Saved')
        )
      })
      .catch((err) => console.log(err.response))
    console.log(value)
  }
  return (
    <Form
      form={form}
      name="customerInfo"
      onFinish={handleSave}
      initialValues={{
        street2: ' '
      }}
    >
      <div className="site-card-wrapper customer-form">
        <Row gutter={16}>
          <Col span={8}>
            <Card title="New Customer" bordered={true}>
              <Row className="contactName">
                <Form.Item
                  name="title"
                  style={{ width: "16%" }}
                >
                  <Select placeholder="Title">
                    <Select.Option value="Mr">Mr</Select.Option>
                    <Select.Option value="Miss">Miss</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="firstName"
                  style={{ width: "42%" }}
                  rules={[{ required: true, message: 'Please input First Name!' }]}
                >
                  <Col >
                    <Input placeholder="First Name" />
                  </Col>
                </Form.Item>
                <Form.Item
                  rules={[{ required: true, message: 'Please input Last Name!' }]}
                  name="lastName"
                  style={{ width: "42%" }}
                >
                  <Col >
                    <Input placeholder="Last Name" />
                  </Col>
                </Form.Item>
              </Row>
              <Row>
                <Form.Item
                  rules={[{ required: true, message: 'Please input company name' }]}
                  name="company"
                  style={{ width: "100%" }}
                >
                  <Input placeholder="Company Name" />
                </Form.Item>
              </Row>
              <Row>
                <Form.Item
                  name="phone"
                  style={{ width: "100%" }}
                  rules={[
                    {
                      required: true,
                      pattern: /^(?:\d*)$/,
                      message: "Please input a correct phone number",
                    },
                  ]}
                >
                  <Input placeholder="Phone Number" />
                </Form.Item>
              </Row>
              <Row>
                <Form.Item
                  name="email"
                  style={{ width: "100%" }}
                  rules={[
                    {
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                    },
                    {
                      required: true,
                      message: 'Please input your E-mail!',
                    },
                  ]}
                >
                  <Input placeholder="Email" />
                </Form.Item>
              </Row>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Address" bordered={true}>
              <Row>
                <Form.Item
                  rules={[{ required: true, message: 'Please input street number' }]}
                  name="street1"
                  style={{ width: "100%" }}
                >
                  <Input placeholder="Street1" />
                </Form.Item>
              </Row>
              <Row>
                <Form.Item
                  name="street2"
                  style={{ width: "100%" }}
                >
                  <Input
                    placeholder="Street2" />
                </Form.Item>
              </Row>
              <Row>
                <Form.Item
                  rules={[{ required: true, message: 'Please input City Name!' }]}
                  name="cityName"
                  style={{ width: "50%" }}
                >
                  <Col >
                    <Input placeholder="City" />
                  </Col>
                </Form.Item>
                <Form.Item
                  rules={[{ required: true, message: 'Please input State' }]}
                  name="stateName"
                  style={{ width: "50%" }}
                >
                  <Col >
                    <Input placeholder="State" />
                  </Col>
                </Form.Item>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row className="buttons">
          <Form.Item >
            <Button
              className="ant-btn ant-btn-primary"
              htmlType="submit"
              size={'middle'}>
              Save
          </Button>
          </Form.Item>
          <Form.Item >
            <Button htmlType="button" onClick={onReset}>
              Reset
        </Button>
          </Form.Item>
        </Row>
      </div>
     
    </Form>
  )
}
