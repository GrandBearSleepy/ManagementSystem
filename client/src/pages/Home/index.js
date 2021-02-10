import React from 'react';
import { Card, Col, Row,List } from 'antd';
import './index.css';


export default function Work() {

  const data=['Test','Total:']

  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={8}>
          <Card
            className="client"
            title="Clients"
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
        <Col span={8}>
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
        <Col span={8}>
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
