import { DatePicker, Space } from 'antd';
import React from 'react';


var mountNode = document.getElementById('date-container');

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const App = () => (
  <Space direction="vertical">
    <DatePicker onChange={onChange} />
    <DatePicker onChange={onChange} picker="week" />
    <DatePicker onChange={onChange} picker="month" />
    <DatePicker onChange={onChange} picker="quarter" />
    <DatePicker onChange={onChange} picker="year" />
  </Space>
);

export default App;