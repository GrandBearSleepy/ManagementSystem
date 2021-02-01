import React, { useState, useEffect } from 'react';
import { Card, Button, Table, Space } from 'antd';
import API from '../../utils/API'

export default function Customer() {
  const [customerData, setCustomerData] = useState([]);


  useEffect(() => {
    loadCustomers()
  }, []);

  function loadCustomers() {
    API.getCustomers()
      .then(res => {
        console.log(res)
        setCustomerData(res.data.map(x => ({ ...x, key: x._id })))
      }
      )
  }

  const columns = [
    {
      title: 'Company',
      dataIndex: 'companyName',
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
    // <div>test</div>
    <Card title="Customers List"
      extra={<Button>DoSome</Button>} >
      <Table
        dataSource={customerData}
        columns={columns}
      />;
    </Card>
  )
}
