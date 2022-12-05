// "back-end" simulation

interface User {
	username: string
	password: string
}

export interface SignUpRequest extends User {
	confirmPassword: string
}

export interface LogInRequest extends User {}

class AuthAPI {
	private static users: Array<User> = []

	private findByUsername(username: string) {
		return AuthAPI.users.find((user) => user.username === username)
	}

	public signUp(payload: SignUpRequest) {
		if (payload.password !== payload.confirmPassword) {
			throw new Error("Passwords doesn't match")
		}

		if (payload.username.length > 25) {
			throw new Error('Username cannot have more than 25 characters')
		}

		if (this.findByUsername(payload.username)) {
			throw new Error('Username already exists')
		}

		AuthAPI.users.push({
			username: payload.username,
			password: payload.password
		})

		console.log(AuthAPI.users)

		return true
	}

	public logIn(payload: LogInRequest) {
		const databaseUser = this.findByUsername(payload.username)

		if (!databaseUser) {
			throw new Error('Username was not found')
		}

		if (databaseUser.password !== payload.password) {
			throw new Error('Password is wrong')
		}

		return {
			username: payload.username
		}
	}
}

export default new AuthAPI()
