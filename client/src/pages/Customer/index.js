import React, { useState, useEffect } from 'react';
import { Card, Button, Table, Space, Row, Popconfirm } from 'antd';
import API from '../../utils/API';


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
      .catch(err => {
        console.log(err)
      })
  }



  function handleDelete(id) {
    API.deleteCustomer(id)
      .then(
        res => {
          loadCustomers();
        }
      )
      .catch(err => {
        console.log(err)
      })
  }

  const columns = [
    {
      title: 'Company',
      dataIndex: 'companyName',
    },
    {
      title: 'Contact Person',
      dataIndex: 'fullName',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
      title: 'Phone',
      dataIndex: 'contactNum',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (text, record) => (
        <Space size="middle">
          <Button type="link" info>Edit</Button>
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
            <Button type="link" danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    }
  ];

  return (
    // <div>test</div>
    <Card title="Customers List"
      extra={<Button>DoSome</Button>} >
      <Table
        scroll={{ x: 1500 }}
        sticky
        dataSource={customerData}
        columns={columns}
      />;
    </Card>
  )
}
