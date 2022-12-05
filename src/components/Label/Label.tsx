import classnames from 'classnames'
import { LabelHTMLAttributes } from 'react'
import styles from './Label.module.css'

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

const Label = ({ className, children, ...props }: LabelProps) => (
	<label {...props} className={classnames(styles.label, className)}>
		{children}
	</label>
)

export default Label
