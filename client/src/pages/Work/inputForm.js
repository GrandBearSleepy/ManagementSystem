import React, { Component } from 'react';
import { Card, Form } from 'antd';
import Header from './Header'
import Reccuring from './Recurring';
import OneOff from './OneOff'
import './inputForm.css'

const tabList = [
  {
    key: 'tab1',
    tab: 'One-Off',
  },
  {
    key: 'tab2',
    tab: 'Recurring',
  },
];

const contentList = {
  tab1: <OneOff />,
  tab2: <Reccuring />,
};


class InputForm extends Component {

  state = {
    key: 'tab1',

  };

  onTabChange = (key, type) => {
    // console.log(key, type);
    this.setState({ [type]: key });
  };

  render() {
    return (
      <div className="job">
        {/* <Header /> */}
        <Card
          style={{ width: '100%' }}
          title="Add a New Job"
          tabList={tabList}
          activeTabKey={this.state.key}
          onTabChange={key => {
            this.onTabChange(key, 'key');
          }}
        >
          {contentList[this.state.key]}
        </Card>
      </div>
    );
  }
}
export default InputForm;