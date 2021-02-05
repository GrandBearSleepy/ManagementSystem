import React from 'react';
import { Card, Col, Row } from 'antd';

export default function Work() {
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Clients" bordered={false}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque maiores soluta minus eius blanditiis mollitia labore id natus fuga nihil vel tempora eligendi ab, quia voluptas impedit nesciunt esse assumenda.
        </Card>
        </Col>
        <Col span={8}>
          <Card title="Cleaners" bordered={false}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti odit dolor cupiditate dicta at culpa repellendus ipsum quisquam officia. Animi iusto sed quisquam neque saepe reiciendis deleniti officia, voluptates repudiandae!
        </Card>
        </Col>
        <Col span={8}>
          <Card title="Jobs" bordered={false}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae amet fugit inventore nesciunt tenetur illo suscipit blanditiis neque aliquam, rerum doloremque officiis quaerat, natus repudiandae quod earum odio adipisci animi.
        </Card>
        </Col>
      </Row>
    </div>
  )
}
