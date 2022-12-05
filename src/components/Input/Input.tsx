import classnames from 'classnames'
import { InputHTMLAttributes } from 'react'
import styles from './Input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ className, ...props }: InputProps) => (
	<input {...props} className={classnames(styles.input, className)} />
)

export default Input
