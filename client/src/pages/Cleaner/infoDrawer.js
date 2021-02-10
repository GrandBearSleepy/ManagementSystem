import React, { useState } from 'react';
import { Drawer, Divider, Col, Row, Button } from 'antd';
import JobTable from '../../components/JobTable'
import './infoDrawer.css'

const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

export default function InfoDrawer(props) {

  const { cleanerData } = props
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
            className="name"
            span={12}>
            <DescriptionItem
              title="Cleaner Name" content={cleanerData.fullName} />
          </Col>
        </Row>
        <Row>
          <Divider orientation="left">Job List</Divider>
          <JobTable jobs={cleanerData.job} />
        </Row>
      </Drawer>
    </>
  );
}

