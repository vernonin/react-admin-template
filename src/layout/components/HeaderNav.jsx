import React, { useState, useMemo } from 'react'
import { Menu, Dropdown, Space, Layout, theme } from 'antd'
import { Link } from 'react-router-dom'
import { colorWithAlpha } from '../../utils/common'
import NavItem from './NavItem';

import {
  DownOutlined,
  SmileOutlined,
  LogoutOutlined,
  GithubOutlined,
  BellOutlined,
  SunOutlined
} from '@ant-design/icons'

import Advert from '../../components/Advert'

const { Header } = Layout

const onLogout = () => {
  console.log('退出登录做的一些操作...')
}

const githubStyle = {
  color: '#000',
  fontSize: '16px'
}

const menuItems = [
  {
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        个人中心
      </a>
    ),
    icon: <SmileOutlined />,
  },
  {
    label: (
      <Link to={'/login'} onClick={onLogout}>
        退出登录
      </Link>
    ),
    icon: <LogoutOutlined />,
  }
]

const HeaderNav = ({ menuCollape }) => {
	const { token: { colorBgContainer, colorBorder } } = theme.useToken();

  const [notice] = useState([
    '           登   高           ',
    '            杜 甫            ',
    '风急天高猿啸哀，渚清沙白鸟飞回。',
    '无边落木萧萧下，不尽长江滚滚来。',
    '万里悲秋常作客，百年多病独登台。',
    '艰难苦恨繁霜鬓，潦倒新停浊酒杯。',
  ])

  const styles = useMemo(() => {
    return {
      position: 'fixed',
      top: '0',
      left: menuCollape ? '48px' : '200px',
      right: '0',
      height: '48px',
      background: colorWithAlpha(colorBgContainer, 0.33),
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 25px',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 0 2px rgba(0,0,0,.1)',
      borderBottom: `1px solid ${colorBorder}`,
      zIndex: '100',
      transition: 'all .3s ease',
    }
  }, [menuCollape, colorBgContainer])

	return (
    <Header style={styles}>
      <Advert notices={notice} />
      <div style={{height: '100%', display: 'flex', alignItems: 'center'}}>
        <NavItem>
          <SunOutlined style={{fontSize: '16px'}}/>
        </NavItem>
        <NavItem>
          <BellOutlined style={{fontSize: '16px'}}/>
        </NavItem>
        <NavItem>
          <a style={githubStyle} target="_blank" rel="noopener noreferrer" href="https://github.com/vernonin/react-admin-template">
            <GithubOutlined />
          </a>
        </NavItem>
        <Dropdown menu={{ items: menuItems }}>
          <a onClick={e => e.preventDefault()} href={'/'}>
            <Space>
              设 置
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
    </Header>
	)
}


export default HeaderNav