import React from 'react';
import { Select,  } from 'antd';


const { Option } = Select;


export default function Slection(props) {
  console.log(props)

  const { cleanerList, handleSelectChange } = props

  return (

    <div>
      <h2>Assign</h2>
      <Select
        labelInValue
        onChange={handleSelectChange}
        style={{ width: '50%' }}
        placeholder="Select a Cleaner"

      >
        {cleanerList.map(each => {
          return <Option
            key={each._id}
            value={each._id}
          >{each.fullName}</Option>
        })}

      </Select>
    </div>
  )
}
