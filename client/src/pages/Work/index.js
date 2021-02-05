import React, { useState, useEffect } from 'react';
import { Card, Button, Table } from 'antd';
import API from '../../utils/API'

export default function Jobs() {

  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    getJobData()
  }, []);

  function getJobData() {
    API.getCustomers()
      .then(res => {
        console.log("Received data:")
        console.log(res.data)
        setJobData(res.data.map(x => ({ ...x, key: x._id })))
        // console.log(cleanerData)

      }
      )
  }

  const columns = [
    {
      title: 'Type',
      dataIndex: 'title',
    },
    {
      title: 'Description',
      dataIndex: 'fullName',
    },
    {
      title: 'Client Name',
      dataIndex: 'phone',
    },
    {
      title: 'Cleaner Name',
      dataIndex: 'address',
    },

  ];


  return (
    <Card title="Cleaner List"
      extra={<Button>DoSome</Button>} >
      <Table dataSource={jobData} columns={columns} />;
    </Card>
  )
}
