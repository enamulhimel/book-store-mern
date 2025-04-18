// import { useEffect } from 'react';
// import axios from 'axios';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBooks from './pages/CreateBooks';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';
import ShowBook from './pages/ShowBook';

export default function App() {
	// useEffect(() => {
	// 	axios
	// 		.get('http://localhost:5555/books')
	// 		.then(res => {
	// 			console.log(res);
	// 		})
	// 		.catch(err => {
	// 			console.log(err);
	// 		});
	// }, []);
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/books/create" element={<CreateBooks />} />
			<Route path="/books/details/:id" element={<ShowBook />} />
			<Route path="/books/edit/:id" element={<EditBook />} />
			<Route path="/books/delete/:id" element={<DeleteBook />} />
		</Routes>
	);
}
