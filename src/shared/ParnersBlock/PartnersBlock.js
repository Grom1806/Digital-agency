import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './PartnersBlock.module.scss';
import Card from '@shared/assets/Partners/Card.svg';
import Card1 from '@shared/assets/Partners/Card-1.svg';
import Card2 from '@shared/assets/Partners/Card-2.svg';
import Card3 from '@shared/assets/Partners/Card-3.svg';
import Card4 from '@shared/assets/Partners/Card-4.svg';
import Card5 from '@shared/assets//Partners/Card-5.svg';
const PartnersBlock = () => {
    return _jsx("div", { children: _jsxs("div", { className: styles.partnersBlock, children: [_jsx("h3", { className: styles.title, children: "Trusted By 250+ Companies" }), _jsxs("ul", { children: [_jsx("li", { children: _jsx("img", { src: Card, alt: "partner 1" }) }), _jsx("li", { children: _jsx("img", { src: Card1, alt: "partner 2" }) }), _jsx("li", { children: _jsx("img", { src: Card2, alt: "partner 3" }) }), _jsx("li", { children: _jsx("img", { src: Card3, alt: "partner 4" }) }), _jsx("li", { children: _jsx("img", { src: Card4, alt: "partner 5" }) }), _jsx("li", { children: _jsx("img", { src: Card5, alt: "partner 6" }) })] })] }) });
};
export default PartnersBlock;
