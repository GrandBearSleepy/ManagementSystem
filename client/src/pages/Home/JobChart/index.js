import React, { useState, useEffect } from 'react';
import { Pie } from 'ant-design-pro/lib/Charts';
import 'ant-design-pro/dist/ant-design-pro.css';
import './index.css'
import API from '../../../utils/API'


export default function JobChart() {



  const salesPieData = [
    {
      x: 'One-Off',
      y: 15,
    },
    {
      x: 'Recurring',
      y: 36,
    },
  ];
  return (
    <Pie
      hasLegend
      title="Job Structure"
      subTitle="Job Structure(TODO)"
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
