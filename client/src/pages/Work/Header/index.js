import React,{useEffect,useState} from 'react';
import { Select } from 'antd';
import API from '../../../utils/API'

const { Option } = Select;


export default function Header(props) {

  const { clientList} =props

  return (
    
    <div>
      <h2>Job for</h2>
        <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a Client"
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        
      >
        {clientList.map(each => {
          return <Option
            key={each._id}
            value={each.companyName}
          >{each.companyName}</Option>
        })}
      </Select>
    </div>
  )
}
