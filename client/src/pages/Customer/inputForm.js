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
  Card
}
  from 'antd';


export default function inputForm() {

  function handleSave(value) {
    const newCustomer = {
      contactPerson: {
        title: value.title,
        firstName: value.firstName,
        lastName: value.lastName,
      },
      companyName: value.company,
      address: value.street1
        + ' '
        + value.street2
        + ' '
        + value.cityName
        + ' '
        + value.stateName
    }
    console.log(newCustomer)
    API.saveCustomer(newCustomer)
      .then(res => {
        console.log(res)
      })
      .catch((err) => console.log(err.response))
    console.log(value)
  }
  return (
    <Form
      name="customerInfo"
      onFinish={handleSave}
    >
      <div className="site-card-wrapper">
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
                >
                  <Col >
                    <Input placeholder="First Name" />
                  </Col>
                </Form.Item>
                <Form.Item
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
                >
                  <Input placeholder="Phone Number" />
                </Form.Item>
              </Row>
              <Row>
                <Form.Item
                  name="email"
                  style={{ width: "100%" }}
                >
                  <Input placeholder="Email" />
                </Form.Item>
              </Row>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Address" bordered={true}>

              <Form.Item
                name="street1"
                style={{ width: "100%" }}
              >
                <Input placeholder="Street1" />
              </Form.Item>
              <Form.Item
                name="street2"
                style={{ width: "100%" }}
              >
                <Input placeholder="Street2" />
              </Form.Item>
              <Row>
                <Form.Item
                  name="cityName"
                  style={{ width: "50%" }}
                >
                  <Col >
                    <Input placeholder="City" />
                  </Col>
                </Form.Item>
                <Form.Item
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
      </div>
      <Row>
        <Form.Item >
          <Button
            className="savetBtn"
            type="primary"
            htmlType="submit"
            size={'middle'}>
            Save
          </Button>
        </Form.Item>
      </Row>
    </Form>
  )
}
