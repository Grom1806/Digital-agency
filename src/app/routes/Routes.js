import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Home from '@pages/Home/Home';
import Layout from '@pages/Layout/Layout';
import NotFound from '@pages/NotFound/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const Routing = () => {
    return (_jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: '/', element: _jsx(Layout, { children: _jsx(Home, {}) }) }), _jsx(Route, { path: '*', element: _jsx(Layout, { children: _jsx(NotFound, {}) }) })] }) }));
};
export default Routing;
