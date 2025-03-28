import { jsx as _jsx } from "react/jsx-runtime";
import styles from './ContactButton.module.scss';
const ContactButton = () => {
    return (_jsx("button", { className: styles.button, children: "Contact Us" }));
};
export default ContactButton;
