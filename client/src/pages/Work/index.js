import React, { useState, useEffect } from 'react';
import { Card, Table, Popconfirm, Space, Button } from 'antd';
import API from '../../utils/API';
import ModalList from './ModalList';
import moment from 'moment';
import './index.css'

export default function Jobs() {

  const [jobData, setJobData] = useState([]);

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
          console.log(res)
          getJobData();
        }
      )
      .catch(err => {
        console.log(err)
      })
  }

  function formatTime(val) {
    
    return val ? moment(val).format('YYYY-MM-DD') : ''
  }

  function formatCurrency(val) {
    return ('$'+val)
  }
  const columns = [
    {

      title: 'Type',
      dataIndex: 'type',
    },
    {

      title: 'Start Date',
      dataIndex: 'startDate',
      render:formatTime
    },
    {

      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'Price(AUD)',
      dataIndex: 'price',
      render: formatCurrency
    },
    {
      width: '100px',
      title: 'Assign',
      dataIndex: 'assigned',
      render: function (text, record) {
        if (text === true) {
          return 'Assigned'
        }
        else return (<ModalList
        getJobData={getJobData}
        jobId={record.key} />)
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
      <Table
        className="jobs-tab"
        dataSource={jobData} columns={columns} />
    </Card>
  )
}
