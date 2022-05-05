import React from 'react'
import { Link } from 'react-router-dom'
import page404 from '../icons/svg/404.svg'

const notFoundStyle = { display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }
const textStyle = { fontSize: '18px', fontFamily: '楷体', fontWeight: 'bolder' }

const NotFound = () => {
	return (
		<div style={notFoundStyle}>
			<img src={page404} alt="" />
			<div style={textStyle}>
				<span>页面找不到</span>
				<Link to="/">返回首页</Link>
			</div>
		</div>
	)
}

export default NotFound
