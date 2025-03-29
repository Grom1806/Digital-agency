import { jsx as _jsx } from "react/jsx-runtime";
import Routing from './routes/Routes';
function App() {
    return (_jsx("div", { children: _jsx("div", { className: "wrapper", children: _jsx(Routing, {}) }) }));
}
export default App;
