import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Knowledges from '../pages/Knowledges';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import NotFound404 from '../pages/NotFound404';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" Component={Home} />
				<Route path="/Compétences" Component={Knowledges} />
				<Route path="/Portfolio" Component={Portfolio} />
				<Route path="/Contact" Component={Contact} />
				<Route path="*" Component={NotFound404} />
			</Routes>
		</BrowserRouter>
	);
};
export default App;
