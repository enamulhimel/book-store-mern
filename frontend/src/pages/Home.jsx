import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox } from 'react-icons/md';
import { MdOutlineDelete } from 'react-icons/md';
import BooksCard from '../components/home/BooksCard';
import BooksTable from '../components/home/BooksTable';

const Home = () => {
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(false);
	const [showType, setShowType] = useState('table');

	useEffect(() => {
		setLoading(true);
		axios
			.get('http://localhost:5555/books')
			.then(res => {
				console.log(res);
				setBooks(res.data.data);
				setLoading(false);
			})
			.catch(err => {
				console.log(err);
				setLoading(false);
			});
	}, []);

	return (
		<div className="p-4">
			<div className="flex justify-center items-center gap-x-4">
				<button
					className="bg-sky-300 hover:bg-sky-600 text-white px-4 py-2 rounded-md"
					onClick={() => setShowType('table')}
				>
					Show Table
				</button>
				<button
					className="bg-sky-800 text-white px-4 py-2 rounded-md"
					onClick={() => setShowType('card')}
				>
					Show Cards
				</button>
			</div>
			<div className="flex justify-between items-center">
				<h1 className="text-3xl my-8">Book List</h1>
				<Link to="/books/create">
					<MdOutlineAddBox className="text-4xl text-sky-800" />
				</Link>
			</div>
			{loading ? (
				<Spinner />
			) : showType === 'table' ? (
				<BooksTable books={books} />
			) : (
				<BooksCard books={books} />
			)}
		</div>
	);
};

export default Home;
