import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Header from '@widgets/Header/Header';
import styles from './Layout.module.scss';
const Layout = ({ children }) => {
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx("main", { className: styles.layout, children: children })] }));
};
export default Layout;
