import { ReactNode, useState } from 'react'
import AuthAPI, { LogInRequest, SignUpRequest } from '../api/AuthAPI'
import AuthContext, { User } from '../contexts/auth'

interface AuthProviderProps {
	children?: ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {
	const [isAuth, setAuth] = useState(false)
	const [currentUser, setCurrentUser] = useState<User | null>(null)

	const logIn = (payload: LogInRequest) => {
		try {
			const user = AuthAPI.logIn(payload)

			if (user) {
				setAuth(true)
				setCurrentUser({ username: user.username })
			}
		} catch (error: any) {
			throw error
		}
	}

	const logOut = () => {
		if (!isAuth) {
			throw new Error('User have not logged in')
		}

		setAuth(false)
		setCurrentUser(null)
	}

	const signUp = (payload: SignUpRequest) => {
		try {
			if (AuthAPI.signUp(payload)) {
				logIn({ username: payload.username, password: payload.password })
			}
		} catch (error: any) {
			throw error
		}
	}

	return (
		<AuthContext.Provider
			value={{ isAuth, currentUser, logIn, logOut, signUp }}
		>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
