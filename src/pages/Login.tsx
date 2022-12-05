import { FormEvent, useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ErrorAlert from '../components/ErrorAlert'
import Input from '../components/Input'
import Label from '../components/Label'
import SubmitButton from '../components/SubmitButton'
import AuthContext from '../features/auth/contexts/auth'
import formStyles from '../styles/form.module.css'

const Login = () => {
	const navigate = useNavigate()
	const { logIn } = useContext(AuthContext)
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [errorMessage, setErrorMessage] = useState('')

	const handleLoginFormSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		try {
			logIn({ username, password })
			navigate('/profile', { replace: true })
		} catch (error: any) {
			setErrorMessage(error.message)
		}

		setUsername('')
		setPassword('')
	}

	return (
		<div>
			<form onSubmit={handleLoginFormSubmit} className={formStyles.form}>
				<div>
					<h1 className={formStyles.heading}>Log in to your account</h1>
					<p className={formStyles.description}>
						Don't have an account?{' '}
						<Link to="/signup" replace className={formStyles.link}>
							Sign up
						</Link>
					</p>
				</div>
				{errorMessage ? <ErrorAlert message={errorMessage} /> : null}
				<div className={formStyles.inputGroup}>
					<div>
						<Label htmlFor="username">Username</Label>
						<Input
							type="text"
							id="username"
							value={username}
							placeholder="Enter your username"
							spellCheck="false"
							onChange={({ target }) => setUsername(target.value)}
						/>
					</div>
					<div>
						<Label htmlFor="password">Password</Label>
						<Input
							type="password"
							id="password"
							value={password}
							placeholder="Enter your password"
							onChange={({ target }) => setPassword(target.value)}
						/>
					</div>
				</div>
				<div className={formStyles.footer}>
					<SubmitButton>Log in</SubmitButton>
				</div>
			</form>
		</div>
	)
}

export default Login
