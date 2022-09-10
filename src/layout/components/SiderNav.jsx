import React, { useState } from 'react'
import { Menu } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
import { Layout } from 'antd'
import menu  from '../../menu'
import useParentRoute from '../../hooks/useParentRoute'
import LogoSvg from '../../icons/svg/logo.svg'

const { Sider } = Layout

const titleStyle = {
	height: '48px',
	lineHeight: '48px',
	fontWeight: '600',
	fontSize: '20px',
	fontFamily: '楷体',
	color: 'lightblue',
	textAlign: 'center',
	overflow: 'hidden'
}

const SiderNav = () => {
	
	const navigate = useNavigate()
	// 当前路由
	const location = useLocation()

	const [menuCollape, setMenuCollape] = useState(false)
	const [current, setCurrent] = useState(location.pathname)

	const [parent] = useParentRoute(current)


	
	const onMenu = event => {
		setCurrent(event.key)
		navigate(event.key)
	}

	return (
		<Sider
			collapsible
			collapsed={menuCollape}
			onCollapse={value => setMenuCollape(value)}
		>
			<div>
				<p style={titleStyle}>
					{menuCollape ? <img style={{marginLeft: '6px'}} src={LogoSvg} alt=""/> : '弄因农产品后台'}
				</p>
				<>
					<Menu
						theme={'dark'}
						onClick={onMenu}
						mode={"inline"}
						items={menu}
						defaultOpenKeys={[parent]}
						defaultSelectedKeys={[current]}
					/>
				</>
			</div>
		</Sider>
	)
}

export default SiderNav
