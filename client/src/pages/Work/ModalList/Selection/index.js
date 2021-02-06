import React from 'react';
import { Select,  } from 'antd';


const { Option } = Select;


export default function Slection(props) {
  console.log(props)

  const { cleanerList, handleSelectChange } = props

  return (

    <div>
      <h2>Job for</h2>
      <Select
        labelInValue
        onChange={handleSelectChange}
        style={{ width: '50%' }}
        placeholder="Select a Client"
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }

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
