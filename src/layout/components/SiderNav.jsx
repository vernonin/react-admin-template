import React, { useState } from 'react'
import { Menu } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
import { Layout } from 'antd'
import menu  from '../../menu'
import useParentRoute from '../../hooks/useParentRoute'

const { Sider } = Layout

const titleStyle = {
	color: 'lightblue', 
	height: '64px',
	lineHeight: '64px',
	fontWeight: '600', 
	fontFamily: '楷体', 
	textAlign: 'center'
}

const SiderNav = () => {
	
	const navigate = useNavigate()
	// 当前路由
	const location = useLocation()

	const [current, setCurrent] = useState(location.pathname)

	const [parent] = useParentRoute(current)

	
	const onMenu = event => {
		setCurrent(event.key)
		navigate(event.key)
	}

	return (
		<Sider style={{width: 'auto'}} className='layout-sider'>
			<h2 style={titleStyle}>
				弄因农产品后台
				<>
					<Menu
						theme={'dark'}
						onClick={onMenu}
						mode={"inline"}
						items={menu}
						inlineCollapsed={false}
						defaultOpenKeys={[parent]}
						defaultSelectedKeys={[current]}
					/>
				</>
			</h2>
		</Sider>
	)
}


export default SiderNav