import React, { useState, useEffect } from 'react';
import { Card, Button, Table, Space, Popconfirm } from 'antd';
import API from '../../utils/API';
import './index.css'
import InfoDrawer from './infoDrawer';


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
        setCleanerData(res.data.map(x => ({ ...x, key: x._id })))
        // console.log(cleanerData)

      }
      )
  }
  function handlerDelete(id) {
    API.deleteCleaner(id)
      .then(
        res => {
          loadCleaners();
        }
      )
      .catch(err => {
        console.log(err)
      })
  }

  const columns = [
    {
      width: '50px',
      title: 'Title',
      dataIndex: 'title',
    },
    {
      width: '100px',
      title: 'Name',
      dataIndex: 'fullName',
    },
    {
      width: '80px',
      title: 'Phone',
      dataIndex: 'phone',
    },
    {
      width: '200px',
      title: 'Address',
      dataIndex: 'address',
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
          <InfoDrawer cleanerData={record} />
          <Popconfirm title="Sure to delete?" onConfirm={() => handlerDelete(record.key)}>
            <Button type="link" danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    }
  ];


  return (
    <Card
      className="cleaners"
      title="Cleaner List"
       >
      <Table
        className="cleaners-tab"
        scroll={{ x: 1500 }}
        sticky
        dataSource={cleanerData}
        columns={columns}
      />;
    </Card>
  )
}
