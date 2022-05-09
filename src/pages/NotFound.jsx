import React from 'react'
import { Link } from 'react-router-dom'
import page404 from '../icons/svg/404.svg'
import '../style/notFound.css'

const backStyle = { width: '100vw', height: '100vh',background: `url(${page404}) center center no-repeat` }

const NotFound = () => {
	return (
		<div style={backStyle} className="not-found-container" >
			<div className="text-content">
				<span>页面找不到</span>
				<Link to="/">返回首页</Link>
			</div>
		</div>
	)
}

export default NotFound
