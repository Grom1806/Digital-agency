import { useState } from 'react';
import styles from './Menu.module.scss';
type NavList = {
  id: number;
  name: string;
};

const navItems: NavList[] = [
  { id: 0, name: 'Home' },
  { id: 1, name: 'About' },
  { id: 2, name: 'Services' },
  { id: 3, name: 'Work' },
  { id: 4, name: 'Process' },
  { id: 5, name: 'Careers' },
];

const Menu = () => {
  const [activeLink, setActiveLink] = useState(0);
  return (
    <nav className={styles.menu}>
      <ul className={styles.menuList}>
        {navItems.map((item) => (
          <li
            key={item.id}
            className={activeLink === item.id ? styles.active : ''}
            onClick={() => setActiveLink(item.id)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
