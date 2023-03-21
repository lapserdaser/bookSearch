import React from 'react';
import { Routes, Route } from 'react-router-dom';

import BookDetails from './Components/BookDetails.js';
import Main from './Components/Main.js';

export default function App() {
	return (
		<Routes>
			<Route index element={<Main />} />
			<Route path={`BookDetails/:id`} element={<BookDetails />} />
		</Routes >
	);
}
