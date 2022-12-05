import { useContext } from 'react'
import AuthContext from '../../features/auth/contexts/auth'
import styles from './Profile.module.css'

const Profile = () => {
	const { currentUser, logOut } = useContext(AuthContext)

	return (
		<>
			<div>
				<p className={styles.text}>You have logged in as</p>
				<h1 className={styles.username}>{currentUser?.username}</h1>
			</div>
			<div className={styles.logout}>
				<button onClick={() => logOut()} className={styles.button}>
					Log out
				</button>
			</div>
		</>
	)
}

export default Profile
