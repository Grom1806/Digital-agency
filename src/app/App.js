import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Home from '@pages/Home/Home';
import Header from '@widgets/Header/Header';
function App() {
    return (_jsx("div", { children: _jsxs("div", { className: "wrapper", children: [_jsx(Header, {}), _jsx(Home, {})] }) }));
}
export default App;
