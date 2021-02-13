import React, { useState } from 'react';
import { Drawer, Divider, Col, Row, Button } from 'antd';
import './infoDrawer.css'
import JobTable from '../../components/JobTable';

const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

export default function InfoDrawer(props) {

  const { customerData } = props
  console.log(props)
  const [visible, setVisible] = useState(false);
  function showDrawer() {
    setVisible(true);
  };

  function onClose() {
    setVisible(false);
  };

  return (
    <>
      <Button type="link" onClick={showDrawer}>
        More Info
      </Button>

      <Drawer
        width={640}
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Row>
          <Col
            className="com-name"
            span={12}>
            <DescriptionItem title="Comany Name" content={customerData.companyName} />
          </Col>
        </Row>
        <Row>
          <Divider orientation="left">Job List</Divider>
          <JobTable jobs={customerData.job} />
        </Row>
      </Drawer>
    </>
  );
}

