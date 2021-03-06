import React from 'react';
import { Table } from 'antd';

export default function JobTable(props) {
  console.log(props)
  function formatCurrency(val) {
    return ('$' + val)
  }
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
      title: 'Price(AUD)',
      dataIndex: 'price',
      render: formatCurrency,
      key: '_id',
    },
    {
      width: '200px',
      title: 'Details',
      dataIndex: 'description',
      key: '_id',
    },
    {
      width: '200px',
      title: 'From',
      dataIndex: 'from',
      key: '_id',
    },
    {
      width: '200px',
      title: 'Cleaner',
      dataIndex: 'to',
      key: '_id',
    },
  ];
  return (
    <Table columns={columns} dataSource={props.jobs} />
  )
}
