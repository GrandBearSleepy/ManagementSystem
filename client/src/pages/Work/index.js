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
      }
      )
  }
  // const {job} = jobData

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
      title: 'Asigned',
      dataIndex: 'address',
      render: function (address) {
        if (address) {
          return address
        }
        else return(<a>Asign to a cleaner</a>)

      }
    },

  ];


  return (
    <Card title="Cleaner List"
      extra={<Button>DoSome</Button>} >
      <Table dataSource={jobData} columns={columns} />;
    </Card>
  )
}
