import { useRoutes } from 'react-router-dom'
import NotFound from '../pages/NotFound'

import asyncRoutes from './asyncRoutes'
import authRoutes from './authRoutes';
import { useAppSelector } from '../store/hooks'

const staticRoutes = [
	{
		path: '*',
		element: <NotFound />
	},
]

const Router = () => {
	const token = useAppSelector(state => state.setting.token)
	console.log('res:', token)

	const routes = token ? asyncRoutes.concat(staticRoutes, authRoutes) : authRoutes.concat(staticRoutes)

	return useRoutes(routes)
}
export default Router