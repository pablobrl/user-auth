import { createContext } from 'react'
import { LogInRequest, SignUpRequest } from '../api/AuthAPI'

export interface User {
	username: string
}

interface AuthContextData {
	isAuth: boolean
	currentUser: User | null
	logIn(payload: LogInRequest): void
	logOut(): void
	signUp(payload: SignUpRequest): void
}

const AuthContext = createContext({} as AuthContextData)

export default AuthContext
