import React from 'react';
import { Table } from 'antd';
import moment from 'moment';

export default function JobTable(props) {


  function formatTime(val) {
    return val ? moment(val).format('YYYY-MM-DD') : ''
  }
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
    {
      width: '200px',
      title: 'Client Name',
      dataIndex: 'from',
      key: '_id',
    },
    {
      width: '200px',
      title: 'Start Date',
      dataIndex: 'startDate',
      key: '_id',
      render: formatTime
    },
  ];
  return (
    <Table columns={columns} dataSource={props.jobs} />
  )
}
