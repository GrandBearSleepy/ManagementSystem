import React from 'react';
import { Bar } from 'ant-design-pro/lib/Charts';

export default function TodoChart() {
  const salesData = [];
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  for (let i = 0; i < 12; i += 1) {
    salesData.push({
      x: monthNames[i],
      y: Math.floor(Math.random() * 1000) + 200,
    });
  }
  return (
    <Bar height={300} title="Sales(TODO)" data={salesData} />
  )
}
