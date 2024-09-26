import React, { useState, useMemo } from 'react'
import { Menu, Dropdown, Space, Layout, theme } from 'antd'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { toggleTheme } from '../../store/features/setting/settingSlice'
import { colorWithAlpha } from '../../utils/common'
import NavItem from './NavItem'
import Notice from './Notice'
import FullScreen from '../../components/FullScreen'

import {
  DownOutlined,
  SmileOutlined,
  LogoutOutlined,
  GithubOutlined,
  BellOutlined,
  SunOutlined,
  MoonOutlined
} from '@ant-design/icons'

import Advert from '../../components/Advert'

const iconStyles = {
  fontSize: '16px'
}
const onLogout = () => {
  console.log('退出登录做的一些操作...')
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
  const appDispatch = useAppDispatch();
  const setting = useAppSelector(state => state.setting);
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
      left: menuCollape ? setting.asideCollapeWidth + 'px' : setting.asideWidth + 'px',
      right: '0',
      height: setting.headerHeight + 'px',
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
  }, [setting, menuCollape, colorBgContainer])

	return (
    <Layout.Header  style={styles}>
      <Advert notices={notice} />
      <div style={{height: '100%', display: 'flex', alignItems: 'center'}}>
        <NavItem>
          <FullScreen size="16px" />
        </NavItem>
        <NavItem onClick={() => appDispatch(toggleTheme())}>
          {
            setting.theme === 'dark'
              ? <SunOutlined style={iconStyles} />
              : <MoonOutlined style={iconStyles} />
          }
        </NavItem>
        <NavItem>
          <Dropdown
            dropdownRender={() => <Notice />}
            arrow
            trigger={['click']}
          >
            <BellOutlined style={iconStyles} />
          </Dropdown>
        </NavItem>
        <NavItem onClick={() => window.open('https://github.com/vernonin/react-admin-template', '_blank')}>
          <GithubOutlined style={iconStyles} />
        </NavItem>
        &nbsp;
        <Dropdown menu={{ items: menuItems }}>
          <a onClick={e => e.preventDefault()} href={'/'}>
            <Space>
              设 置
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
    </Layout.Header>
	)
}

export default HeaderNav