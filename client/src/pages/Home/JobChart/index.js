import React, { useState, useEffect } from 'react';
import { Pie } from 'ant-design-pro/lib/Charts';
import 'ant-design-pro/dist/ant-design-pro.css';
import './index.css'
import API from '../../../utils/API'


export default function JobChart() {

  const [oneOff, setOneOff] = useState(0);
  const [recurring, setRecurring] = useState(0);

  function getJobData() {
    API.getJobs()
      .then(res => {
        const oneOffDate = res.data.filter(each => each.type === 'One-Off');
        console.log(oneOffDate)
        setOneOff(oneOffDate.length);
        const recurringData = res.data.filter(each => each.type === 'Recurring');
        setRecurring(recurringData.length)
      })
  }

  useEffect(() => {
    getJobData()
  }, [])

  const salesPieData = [
    {
      x: 'One-Off',
      y: oneOff,
    },
    {
      x: 'Recurring',
      y: recurring,
    },
  ];
  return (
    <Pie
      hasLegend
      title="Job Structure"
      subTitle="Job Structure"
      total={() => (
        <span
          dangerouslySetInnerHTML={{
            __html: salesPieData.reduce((pre, now) => now.y + pre, 0),
          }}
        />
      )}
      data={salesPieData}
      valueFormat={val => <span dangerouslySetInnerHTML={{ __html: val }} />}
      height={294}
    />
  )
}
