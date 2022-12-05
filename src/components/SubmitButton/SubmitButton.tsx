import { ReactNode } from 'react'
import styles from './SubmitButton.module.css'

interface SubmitButtonProps {
	children?: ReactNode
}

const SubmitButton = ({ children }: SubmitButtonProps) => (
	<button type="submit" className={styles.button}>
		{children}
	</button>
)

export default SubmitButton
