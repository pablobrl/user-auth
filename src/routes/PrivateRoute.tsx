import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import AuthContext from '../features/auth/contexts/auth'

interface PrivateRouteProps {
	element: JSX.Element
	redirectTo?: string
}

const PrivateRoute = ({
	element,
	redirectTo = '/login'
}: PrivateRouteProps) => {
	const { isAuth } = useContext(AuthContext)

	if (!isAuth) {
		alert('You need to be authenticated in order to access this page')
		return <Navigate to={redirectTo} />
	}

	return element
}

export default PrivateRoute
