import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => (
	<nav className={styles.navbar}>
		<ul className={styles.list}>
			<li>
				<NavLink
					to="/profile"
					className={({ isActive }) =>
						isActive ? styles.activeLink : styles.link
					}
				>
					Profile
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/login"
					className={({ isActive }) =>
						isActive ? styles.activeLink : styles.link
					}
				>
					Log in
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/signup"
					className={({ isActive }) =>
						isActive ? styles.activeLink : styles.link
					}
				>
					Sign up
				</NavLink>
			</li>
		</ul>
	</nav>
)

export default Navbar
