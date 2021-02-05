import React, { useState, useEffect  } from 'react';
import { Card, Button, Table, Space, Popconfirm } from 'antd';
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
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'Name',
      dataIndex: 'fullName',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
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
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (text, record) => (
        <Space size="middle">
          <a >Edit</a>
          <Popconfirm title="Sure to delete?" onConfirm={() => handlerDelete(record.key)}>
            <a>Delete</a>
          </Popconfirm>
        </Space>
      ),
    }
  ];


  return (
    <Card title="Cleaner List"
      extra={<Button>DoSome</Button>} >
      <Table
        scroll={{ x: 1500 }}
        sticky
        dataSource={cleanerData}
        columns={columns}
      />;
    </Card>
  )
}
