import { createBrowserRouter, Navigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Login from '../pages/Login'
import Profile from '../pages/Profile/Profile'
import Signup from '../pages/Signup'
import PrivateRoute from './PrivateRoute'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/profile',
				element: <PrivateRoute element={<Profile />} />
			},
			{
				path: '/login',
				element: <Login />
			},
			{
				path: '/signup',
				element: <Signup />
			}
		]
	},
	{
		path: '*',
		element: <Navigate to="/profile" />
	}
])

export default router
