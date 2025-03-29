import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Banner from '@widgets/Banner/Banner';
import styles from './OurServices.module.scss';
import Icon from '@shared/assets/icons/Icon.svg';
import Puzle from '@shared/assets/icons/puzle.svg';
import Energy from '@shared/assets/icons/enegy.svg';
const serviceBlocks = [
    {
        title: 'Design',
        description: 'At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it is about creating seamless and intuitive user experiences.',
        icon: Icon,
    },
    {
        title: 'Engineering',
        description: 'Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.',
        icon: Puzle,
    },
    {
        title: 'Project Management',
        description: 'Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.',
        icon: Energy,
    },
];
const OurServices = () => {
    return (_jsxs("div", { children: [_jsx(Banner, { title: "Our Services", description: "Transform your brand with our innovative digital solutions that captivate and engage your audience." }), _jsx("div", { className: styles.services, children: serviceBlocks.map((block, index) => {
                    return (_jsxs("div", { className: styles.serviceBlock, children: [_jsx("img", { src: block.icon, alt: block.title }), _jsx("h3", { children: block.title }), _jsx("p", { children: block.description }), _jsx("button", { className: styles.blockBtn, children: "Learn More" })] }, index));
                }) })] }));
};
export default OurServices;
