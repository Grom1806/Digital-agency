import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';
const navItems = [
    { id: 0, name: 'Home', path: '/' },
    { id: 1, name: 'About', path: '/about' },
    { id: 2, name: 'Services', path: '/services' },
    { id: 3, name: 'Work', path: '/work' },
    { id: 4, name: 'Process', path: '/process' },
    { id: 5, name: 'Careers', path: '/careers' },
];
const Menu = () => {
    const [activeLink, setActiveLink] = useState(0);
    return (_jsx("nav", { className: styles.menu, children: _jsx("ul", { className: styles.menuList, children: navItems.map((item) => (_jsx("li", { className: activeLink === item.id ? styles.active : '', onClick: () => {
                    if (activeLink !== item.id) {
                        setActiveLink(item.id);
                    }
                }, children: _jsx(Link, { to: `${item.path}`, children: item.name }) }, item.id))) }) }));
};
export default Menu;
