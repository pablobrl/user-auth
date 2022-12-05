import styles from './ErrorAlert.module.css'

interface ErrorAlertProps {
	message: string
}

const ErrorAlert = ({ message }: ErrorAlertProps) => {
	return (
		<div className={styles.container}>
			<p className={styles.text}>{message}</p>
		</div>
	)
}

export default ErrorAlert
