import React, { useState, useEffect } from 'react';
import { Card, Button, Table, Space, Popconfirm } from 'antd';
import API from '../../utils/API';
import './index.css'


export default function Customer() {

  const [customerData, setCustomerData] = useState([]);
  const [visible, setVisible] = useState(false);

  function showDrawer() {
    setVisible(true);
    console.log('clicked')
  };

  function onClose() {
    setVisible(false);
  };


  useEffect(() => {
    loadCustomers()
    console.log(customerData)
  }, []);

  function loadCustomers() {
    API.getCustomers()
      .then(res => {
        console.log(res.data)
        setCustomerData(res.data.map(x => ({ ...x, key: x._id })))
      }
      )
      .catch(err => {
        console.log(err)
      })
  }

  function handleDelete(id) {
    API.deleteCustomer(id)
      .then(res => {
          console.log(res)
        loadCustomers();
        API.deleteJob({ $in: res.data.job })
        .then(res=>{console.log(res)})
        }
      )
      .catch(err => {
        console.log(err)
      })
  }

  const columns = [
    {
      width: '150px',
      title: 'Company',
      dataIndex: 'companyName',
    },
    {
      width: '100px',
      title: 'Contact Person',
      dataIndex: 'fullName',
    },
    {
      width: '200px',
      title: 'Address',
      dataIndex: 'address',
    },
    {
      width: '80px',
      title: 'Phone',
      dataIndex: 'contactNum',
    },
    {
      width: '100px',
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
          <Button
            type="link"
            info
            onClick={showDrawer}
          >More Info</Button>
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
            <Button type="link" danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    }
  ];



  return (
    <Card
      className="customer"
      title="Customers List"
    >
      <Table
        scroll={{ x: 1500 }}
        sticky
        dataSource={customerData}
        columns={columns}
      />
    </Card>
  )
}
