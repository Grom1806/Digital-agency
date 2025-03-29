import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import TextContainer from '@shared/assets/Text Container.png';
import styles from './Banner.module.scss';
const Banner = ({ title, description }) => {
    return (_jsxs("div", { className: styles.banner, children: [_jsx("img", { src: TextContainer, alt: "" }), _jsxs("div", { className: styles.text, children: [_jsx("h2", { children: title }), _jsx("p", { children: description })] })] }));
};
export default Banner;
