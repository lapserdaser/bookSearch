import React from "react";
import BookDetails from "./BookDetails";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

<BrowserRouter>
	<Routes>
		<Route path='/BookDetails/id' element={<BookDetails />} />
	</Routes>
</BrowserRouter>

export default Routes;