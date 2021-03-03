import React, { useState, useEffect } from 'react';
import { Select, Button, DatePicker, Card } from 'antd';
import API from '../../utils/API';

const { Option } = Select;

export default function Buiding() {
  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  const [clientData, setCleintData] = useState([]);
  const [selectId, setSelectId] = useState({ id: '', value: '' });

  useEffect(() => {
    loadClients()
  }, []);

  function loadClients() {
    API.getCustomers()
      .then(res => {
        setCleintData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleSelectChange=(selected)=>{
    setSelectId({
      id: selected.key,
      value: selected.label
    })
  }

  return (
    <>
      
      <Card
        className="invoice"
        title="Generate"
      >
        <Select
          labelInValue
          onChange={handleSelectChange}
          style={{ width: '30%' }}
          placeholder="Select a Cleaner"

        >
          {clientData.map(each => {
            return <Option
              key={each._id}
              value={each._id}
            >{each.fullName}</Option>
          })}

        </Select>
        <DatePicker onChange={onChange} picker="month" />
      </Card>

    </>
  )
}
