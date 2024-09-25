import React, { lazy } from 'react'
import Layout from '../layout'
import Dashboard from '../pages/Dashboard'
const User = lazy(() => import('../pages/system/User'))
const Setting = lazy(() => import('../pages/system/Setting'))
const MarkDown = lazy(() => import('../pages/awesome/MarkDown'))
const Excel = lazy(() => import('../pages/awesome/Excel'))

const asyncRoutes = [
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: 'dashboard',
				element: <Dashboard />,
				meta: { title: '首页', path: '/dashboard' }
			}
		]
	},
	{
		path: '/system',
		element: <Layout />,
		meta: { title: '系统', path: '/system'},
		children: [
			{
				path: 'user',
				element: <User />,
				meta: { title: '首页', path: '/system/user' }
			},
			{
				path: 'setting',
				element: <Setting />,
				meta: { title: '设置', path: '/system/setting' }
			}
		]
	},
	{
		path: '/awesome',
		element: <Layout />,
		meta: { title: '文档', path: '/awesome'},
		children: [
			{
				path: 'markdown',
				element: <MarkDown />,
				meta: { title: '文档', path: '/awesome/markdown'},
			},
			{
				path: 'excel',
				element: <Excel />,
				meta: { title: '文档', path: '/awesome/excel'},
			}
		]
	}
]


export default asyncRoutes