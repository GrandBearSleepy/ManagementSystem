import React from 'react';
import { Select} from 'antd';


const { Option } = Select;


export default function Header(props) {
  console.log(props)

  const { clientList, handleSelectChange } = props

  return (

    <div>
      <h2>Job for</h2>
      <Select
        labelInValue
        onChange={handleSelectChange}
        style={{ width: '30%' }}
        placeholder="Select a Client"
      >
        {clientList.map(each => {
          return <Option
            key={each._id}
            value={each._id}
          >{each.companyName}</Option>
        })}
        
      </Select>
    </div>
  )
}
