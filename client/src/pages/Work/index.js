import React, { useState, useEffect } from 'react';
import { Card, Table, Popconfirm, Space, Button } from 'antd';
import API from '../../utils/API'
import ModalList from './ModalList'
import './index.css'

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
    API.getJobs()
      .then(res => {
        console.log("Received data:")
        console.log(res.data)
        setJobData(res.data.map(x => ({ ...x, key: x._id })))
      }
      )
  }
  function handleDelete(id) {
    API.deleteJob(id)
      .then(
        res => {
          getJobData();
        }
      )
      .catch(err => {
        console.log(err)
      })
  }
  const columns = [
    {
      title: 'Type',
      dataIndex: 'type',
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'Price',
      dataIndex: 'price',
    },
    {
      title: 'Assign',
      dataIndex: 'assigned',
      render: function (text, record) {
        if (text===true) {
          return 'Assigned'
        }
        else return (<ModalList jobId={record.key} />)
      }
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (text, record) => (
        <Space size="middle">
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
            <Button type="link" danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    }

  ];


  return (
    <Card
      className="jobs"
      title="Job List">
      <Table dataSource={jobData} columns={columns} />;
    </Card>
  )
}
