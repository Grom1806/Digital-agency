import ContactButton from '@features/ContactsButton/ContactButton'
import Menu from '@features/Menu/Menu'

import styles from './Header.module.scss'
import Logo from '@shared/Logo.svg'
const Header = () =>{
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<img src={Logo} alt="squareUp" />
				<span className={styles.logoText}>SquareUp</span>
			</div>
			<Menu />
			<ContactButton />
		</header>
	)
}

export default Header
