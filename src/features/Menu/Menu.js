import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import styles from './Menu.module.scss';
const navItems = [
    { id: 0, name: 'Home' },
    { id: 1, name: 'About' },
    { id: 2, name: 'Services' },
    { id: 3, name: 'Work' },
    { id: 4, name: 'Process' },
    { id: 5, name: 'Careers' },
];
const Menu = () => {
    const [activeLink, setActiveLink] = useState(0);
    return (_jsx("nav", { className: styles.menu, children: _jsx("ul", { className: styles.menuList, children: navItems.map((item) => (_jsx("li", { className: activeLink === item.id ? styles.active : '', onClick: () => setActiveLink(item.id), children: item.name }, item.id))) }) }));
};
export default Menu;
