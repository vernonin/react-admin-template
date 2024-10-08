import React, { useState, useEffect } from 'react'
import { Menu, theme, Typography } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
import { Layout } from 'antd'
import menu  from '../../menu'
import { useAppSelector } from '../../store/hooks'
import useParentRoute from '../../hooks/useParentRoute'
import LogoSvg from '../../icons/svg/logo.svg'
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons'

const titleStyle = {
  height: '48px',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  whiteSpace: 'nowrap'
}

const collapeIconStyle = {
  position: 'absolute',
  top: '66px',
  right: '-10px',
  cursor: 'pointer',
  zIndex: 1000
}

const SiderNav = ({ menuCollape, toggleCollapse }) => {
  const setting = useAppSelector(state => state.setting);

  const { token: { colorBgContainer, colorBorder } } = theme.useToken();

  const navigate = useNavigate()
  // 当前路由
  const location = useLocation()

  const [current, setCurrent] = useState(location.pathname)

  const [parent] = useParentRoute(current)

  useEffect(() => {
    setCurrent(location.pathname)
  }, [location.pathname])

  const onMenu = event => {
    navigate(event.key)
  }

  return (
    <Layout.Sider
      collapsible
      collapsed={menuCollape}
      onCollapse={() => toggleCollapse()}
      width={setting.asideWidth}
      collapsedWidth={setting.asideCollapeWidth}
      trigger={null}
      style={{
        background: colorBgContainer,
        borderRight: `1px solid ${colorBorder}`
      }}
    >
      <div style={{position: 'relative'}}>
        <div style={titleStyle}>
          <Typography.Title level={4}>
            {menuCollape ? <img src={LogoSvg} alt=""/> : setting.systemName}
          </Typography.Title>
        </div>
        <>
          <div style={collapeIconStyle} onClick={() => toggleCollapse()}>
            {
              menuCollape
                ? <RightCircleOutlined style={{fontSize: '20px', color: '#a1a1aa'}} />
                : <LeftCircleOutlined style={{fontSize: '20px', color: '#a1a1aa'}} />
            }
          </div>
          
          <Menu
            theme={'light'}
            onClick={onMenu}
            mode={"inline"}
            items={menu}
            defaultOpenKeys={[parent]}
            selectedKeys={[current]}
            defaultSelectedKeys={[current]}
          />
        </>
      </div>
    </Layout.Sider>
  )
}

export default SiderNav
