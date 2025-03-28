import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ContactButton from '@features/ContactsButton/ContactButton';
import Menu from '@features/Menu/Menu';
import styles from './Header.module.scss';
import Logo from '@shared/Logo.svg';
const Header = () => {
    return (_jsxs("header", { className: styles.header, children: [_jsxs("div", { className: styles.logo, children: [_jsx("img", { src: Logo, alt: "squareUp" }), _jsx("span", { className: styles.logoText, children: "SquareUp" })] }), _jsx(Menu, {}), _jsx(ContactButton, {})] }));
};
export default Header;
