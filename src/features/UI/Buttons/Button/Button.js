import { jsx as _jsx } from "react/jsx-runtime";
import styles from './Button.module.scss';
const Button = ({ title, buttonStyle }) => {
    return (_jsx("button", { className: buttonStyle ? styles[buttonStyle] : styles.button, children: title }));
};
export default Button;
