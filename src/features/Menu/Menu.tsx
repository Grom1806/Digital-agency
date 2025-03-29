import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';

type NavList = {
  id: number;
  name: string;
  path: string;
};

const navItems: NavList[] = [
  { id: 0, name: 'Home', path: '/' },
  { id: 1, name: 'About', path: '/about' },
  { id: 2, name: 'Services', path: '/services' },
  { id: 3, name: 'Work', path: '/work' },
  { id: 4, name: 'Process', path: '/process'},
  { id: 5, name: 'Careers', path: '/careers' },
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
            onClick={() => {
              if (activeLink !== item.id) {
                setActiveLink(item.id);
              }
            }}
          >
            <Link to={`${item.path}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
