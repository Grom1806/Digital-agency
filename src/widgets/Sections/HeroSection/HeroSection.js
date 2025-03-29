import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from '@features/UI/Buttons/Button/Button';
import styles from './HeroSection.module.scss';
const HeroSection = () => {
    return (_jsx("section", { className: styles.heroSection, children: _jsxs("div", { className: styles.sectionWrapper, children: [_jsxs("h1", { className: styles.title, children: ["A Digital Product Studio ", _jsx("br", {}), "that will Work"] }), _jsxs("p", { className: styles.subtitle, children: ["For ", _jsx("span", { children: "Startups" }), ", ", _jsx("span", { children: "Enterprise leaders" }), ", ", _jsx("span", { children: "Media & Publishers" }), " and ", _jsx("span", { children: "Social Good" })] }), _jsxs("div", { className: styles.buttons, children: [_jsx(Button, { title: "Our Work", buttonStyle: "blackBarry" }), _jsx(Button, { title: "Contact Us" })] })] }) }));
};
export default HeroSection;
