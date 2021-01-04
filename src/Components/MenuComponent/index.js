import React, { useState } from 'react';
import { Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const { SubMenu } = Menu;

const MenuComponent = () => {
  const [current, setCurrent] = useState("email")
  const handleClick = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <div className="menu">
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="email">
          <Link to="/email">Email</Link>
        </Menu.Item>
        <Menu.Item key="client">
          <Link to="/client-profile">CLIENT PROFILE</Link>
        </Menu.Item>
        <Menu.Item key="status">
          <Link to="/visa-status">VISA STATUS</Link>
        </Menu.Item>
        <Menu.Item key="admission">
        <Link to="/admission">ADMISSIONS</Link>
        </Menu.Item>
        <Menu.Item key="documents">
        <Link to="/document">DOCUMENTS</Link>
        </Menu.Item>
        <Menu.Item key="form">
          <Link to="/visa-form">VISA FORMS</Link>
        </Menu.Item>
        <Menu.Item key="balance">
          <Link to="/balance">BALANCE</Link>
        </Menu.Item>
        <Menu.Item key="vidoes">
        <Link to="/videos">VIDEOS</Link>
        </Menu.Item>
        <SubMenu className="language" key="SubMenu" icon={<DownOutlined />} title="Language">
          <Menu.ItemGroup>
            <Menu.Item key="setting:1">English</Menu.Item>
            <Menu.Item key="setting:2">Japanese</Menu.Item>
            <Menu.Item key="setting:3">Korean</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    </div>
  )
}

export default MenuComponent;