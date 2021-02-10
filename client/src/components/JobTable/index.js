import React from 'react';
import { Table } from 'antd';

export default function JobTable(props) {
  console.log(props)
  const columns = [
    {
      width: '200px',
      title: 'Type',
      dataIndex: 'type',
      key: '_id',
      render: text => <a>{text}</a>,
    },
    {
      width: '200px',
      title: 'Price',
      dataIndex: 'price',
      key: '_id',
    },
    {
      width: '200px',
      title: 'Details',
      dataIndex: 'description',
      key: '_id',
    },
  ];
  return (
    <Table columns={columns} dataSource={props.jobs} />
  )
}
