import Home from '@pages/Home/Home'
import Layout from '@pages/Layout/Layout'
import NotFound from '@pages/NotFound/NotFound'
import { BrowserRouter , Route, Routes } from 'react-router-dom'

const Routing: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
			<Route path='/' element={<Layout><Home /></Layout>} />		
			<Route path='*' element={<Layout><NotFound /></Layout>} />
			</Routes> 
		</BrowserRouter>
	)
}

export default Routing
