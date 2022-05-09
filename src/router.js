import { useRoutes, Navigate } from 'react-router-dom'

import Layout from './layout'
import Login from './pages/login'
import Register from './pages/register'
import NotFound from './pages/NotFound'
import Dashboard from './pages/Dashboard'

const asyncRoutes = [
	{
		path: '/app',
		element: <Layout />,
		children: [
			{
				path: 'dashboard',
				element: <Dashboard />
			}
		]
	},
]

const Router = () => {
	return useRoutes([
		{
			path: '/',
			element: <Navigate to="/app/dashboard" />
		},
		{
			path: '/app',
			element: <Layout />
		},
		{
			path: '/login',
			element: <Login />
		},
		{
			path: '/register',
			element: <Register />
		},
		{
			path: '*',
			element: <NotFound />
		},
		...asyncRoutes
	])
}
export default Router