import React, { useState, useEffect } from 'react';
import { Card, Button, Table } from 'antd';
import API from '../../utils/API'

export default function Cleaner() {

  const [cleanerData, setCleanerData] = useState([]);

  useEffect(() => {
    loadCleaners()
  }, []);

  function loadCleaners() {
    API.getCleaners()
      .then(res => {
        console.log("Received data:")
        console.log(res.data)
        setCleanerData(res.data.map(x => ({...x, key: x._id})))
    // console.log(cleanerData)

  }
      )
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'firstName',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
  },
];


return (
  <Card title="Cleaner List"
    extra={<Button>DoSome</Button>} >
    <Table dataSource={cleanerData} columns={columns} />;
  </Card>
)
}
