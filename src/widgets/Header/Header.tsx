import Button from '@features/UI/Buttons/Button/Button'
import Menu from '@features/Menu/Menu'

import styles from './Header.module.scss'
import Logo from '@shared/assets/Logo.svg'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="squareUp" />
        <span className={styles.logoText}>SquareUp</span>
      </div>
      <Menu />
      <Button title="Contact Us" />
    </header>
  )
}

export default Header
