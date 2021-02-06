import React, { useState, useEffect } from 'react';
import { Card, Button, Table, Modal } from 'antd';
import API from '../../utils/API'
import ModalList from './ModalList'

export default function Jobs() {

  const [jobData, setJobData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    getJobData()
  }, []);

  function getJobData() {
    API.getCustomers()
      .then(res => {
        console.log("Received data:")
        console.log(res.data)
        setJobData(res.data.map(x => ({ ...x, key: x._id })))
      }
      )
  }
  const columns = [
    {
      title: 'Type',
      dataIndex: ['job', 'type'],
    },
    {
      title: 'Description',
      dataIndex: ['job', 'description'],
    },
    {
      title: 'Client Name',
      dataIndex: 'fullName',
    },
    {
      title: 'Assigned',
      dataIndex: 'cleaner',
      render: function (fullName) {
        if (fullName) {
          return fullName
        }
        else return (<ModalList jobdata={jobData}/>)
      }
    },

  ];


  return (
    <Card title="Job List">
      <Table dataSource={jobData} columns={columns} />;
    </Card>
  )
}
