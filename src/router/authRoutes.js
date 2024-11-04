import { Navigate } from 'react-router-dom'

import Login from '../pages/login'
import Register from '../pages/register'

const authRoutes = [
  {
    path: '/',
    element: <Navigate to="/login" />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
]

export default authRoutes;
