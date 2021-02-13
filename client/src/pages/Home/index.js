import React, { useEffect, useState } from 'react';
import { Card, Col, Row, List } from 'antd';
import './index.css';
import API from '../../utils/API';




export default function Work() {

  const data = ['Test', 'Total: dfdsf']
  const cleanerData = ['Test', 'Total:']
  const  [customerData, setCustomerData] = useState([])
  const jobData = ['Test', 'Total:']

  function getCustomers() {
    API.getCustomers()
      .then(res => {
        console.log(res.data)
        setCustomerData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
  useEffect(() => {
    getCustomers()
  },[])


  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col xs={24} md={8} lg={8}>
          <Card
            className="client"
            title="Clients"
            bordered={false}>
            <List
              size="large"
              bordered
              dataSource={data}
              renderItem={item => <List.Item>{item}</List.Item>}
            />
          </Card>
        </Col>
        <Col xs={24} md={8} lg={8}>
          <Card
            className="cleaner"
            title="Cleaners"
            bordered={false}>
            <List
              size="large"
              header={<div>Header</div>}
              footer={<div>Footer</div>}
              bordered
              dataSource={data}
              renderItem={item => <List.Item>{item}</List.Item>}
            />
          </Card>
        </Col>
        <Col xs={24} md={8} lg={8}>
          <Card
            className="job-card" title="Jobs" bordered={false}>
            <List
              size="large"
              header={<div>Header</div>}
              footer={<div>Footer</div>}
              bordered
              dataSource={data}
              renderItem={item => <List.Item>{item}</List.Item>}
            />
          </Card>
        </Col>
      </Row>
 
    </div>
  )
}
