import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import {Link} from 'react-router-dom';
import { HomeOutlined, MoneyCollectionOutlined, BubOutlined, FundOutlined, MenuOutlined, MoneyCollectFilled, BulbFilled } from '@ant-design/icons';

import icon from "../images/lisk-logo-2.png";

const Navbar = () => {
  return (
    <div className='nav-container'>
    <div className='logo-container'>
    <Avatar src={icon} size="large" />
    <Typography.Title level={2} classNamelogo>
    <Link to={ "/"} >Cryptowise</Link>
    </Typography.Title>
    </div>
    <Menu theme='dark'>
    <Menu.Item icon={<HomeOutlined/>} >
    <Link to="/">Home</Link>
    </Menu.Item>

    <Menu.Item icon={<FundOutlined/>} >
    <Link to="/cyptocurrencies">Cyptocurrencies</Link>
    </Menu.Item>

    <Menu.Item icon={ <MoneyCollectFilled />} >
    <Link to="/exchanges">Exchanges</Link>
    </Menu.Item>
    <Menu.Item icon={<BulbFilled/>} >
    <Link to="/news">News</Link>
    </Menu.Item>
    

    
    </Menu>     
    </div>
  )
}

export default Navbar