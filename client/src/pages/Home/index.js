import React, { useEffect, useState } from 'react';
import { Card, Col, Row, List } from 'antd';
import './index.css';
import API from '../../utils/API';
import JobChart from './JobChart'
import TodoChart from './TodoChart'




export default function Work() {

  
  const [customerData, setCustomerData] = useState()
  const [cleanerData, setCleanerData] = useState()

  const cuData = [`Activit:${customerData}` ,`Total: ${customerData}`]
  const ClData = [`Activit: ${cleanerData}`,`Total: ${cleanerData}`]

  function getCleanerNum() {
    API.getCleaners()
      .then(res => {
        console.log(res.data.length)
        const num = res.data.length
        setCleanerData(num)
      })
      .catch(err => {
        console.log(err)
      })
  }


  function getCustomerNum() {
    API.getCustomers()
      .then(res => {
        console.log(res.data.length)
        const num = res.data.length
        setCustomerData(num)
      })
      .catch(err => {
        console.log(err)
      })
  }
  useEffect(() => {
    getCustomerNum()
    getCleanerNum()
  }, [])


  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col xs={24} md={6} lg={6}>
          <Card
            className="client"
            title="Clients"
            bordered={false}>
            <List
              size="large"
              bordered
              dataSource={cuData}
              renderItem={item => <List.Item>{item}</List.Item>}
            />
          </Card>
        </Col>
        <Col xs={24} md={6} lg={6}>
          <Card
            className="cleaner"
            title="Cleaners"
            bordered={false}>
            <List
              size="large"
              bordered
              dataSource={ClData}
              renderItem={item => <List.Item>{item}</List.Item>}
            />
          </Card>
        </Col>
        <Col xs={24} md={12} lg={12}>
          <TodoChart className="sales-chart"/>
        </Col>
      </Row>
      <JobChart className="job-chart"/>
    </div>
  )
}
