import { FormEvent, useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ErrorAlert from '../components/ErrorAlert'
import Input from '../components/Input'
import Label from '../components/Label'
import SubmitButton from '../components/SubmitButton'
import AuthContext from '../features/auth/contexts/auth'
import formStyles from '../styles/form.module.css'

const Signup = () => {
	const { signUp } = useContext(AuthContext)
	const navigate = useNavigate()
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [errorMessage, setErrorMessage] = useState('')

	const handleLoginFormSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		try {
			signUp({ username, password, confirmPassword })
			navigate('/profile', { replace: true })
		} catch (error: any) {
			setErrorMessage(error.message)
		}
	}

	return (
		<div>
			<form onSubmit={handleLoginFormSubmit} className={formStyles.form}>
				<div>
					<h1 className={formStyles.heading}>Create your account</h1>
					<p className={formStyles.description}>
						Already have an account?{' '}
						<Link to="/login" replace className={formStyles.link}>
							Log in
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
							autoComplete="off"
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
					<div>
						<Label htmlFor="confirmPassword">Confirm password</Label>
						<Input
							type="password"
							id="confirmPassword"
							value={confirmPassword}
							placeholder="Re-enter your password"
							onChange={({ target }) => setConfirmPassword(target.value)}
						/>
					</div>
				</div>
				<div className={formStyles.footer}>
					<SubmitButton>Sign up</SubmitButton>
				</div>
			</form>
		</div>
	)
}

export default Signup
