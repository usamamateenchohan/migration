import React, {useState} from 'react';
import { Avatar } from 'antd';
import { Link } from "react-router-dom";
import { Tabs, Badge, Divider } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import Balance from './Balance'


const BalanceComponent = () => {

    
  return (
      <div className="container">
         <Balance />
      </div>
  )
}

export default BalanceComponent;