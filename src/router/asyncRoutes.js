import React, { lazy } from 'react'
import Layout from '../layout'
import Dashboard from '../pages/Dashboard'
const User = lazy(() => import('../pages/system/User'))

const asyncRoutes = [
	{
		path: '/app',
		element: <Layout />,
		children: [
			{
				path: 'dashboard',
				element: <Dashboard />,
				meta: { title: '首页', path: '/app/dashboard' }
			}
		]
	},
	{
		path: '/system',
		element: <Layout />,
		meta: { title: '首页', path: '/system'},
		children: [
			{
				path: 'user',
				element: <User />,
				meta: { title: '首页', path: '/system/user' }
			}
		]
	},
]


export default asyncRoutes