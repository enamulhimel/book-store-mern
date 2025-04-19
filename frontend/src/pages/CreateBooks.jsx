import React from 'react';
import { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CreateBooks = () => {
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [publishYear, setPublishYear] = useState('');
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleSaveBook = async () => {
		const data = {
			title,
			author,
			publishYear,
		};
		// console.log(data);
		setLoading(true);
		await axios
			.post('http://localhost:5555/books/create-book', data)
			.then(res => {
				console.log(res);
				setLoading(false);
				alert('Book created successfully');
				navigate('/');
			})
			.catch(err => {
				console.log(err);
				alert('Error creating book');
				setLoading(false);
			});
	};

	return (
		<div>
			<BackButton />
			<h1 className="text-3xl my-4">Create Book</h1>
			{loading ? <Spinner /> : ''}
			<div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] mx-auto p-4">
				<div className="my-4">
					<label className="text-xl mr-4 text-gray-500">Title:</label>
					<input
						type="text"
						className="border-2 border-gray-400 px-4 py-2 rounded-lg w-full"
						value={title}
						onChange={e => setTitle(e.target.value)}
						placeholder="Enter book title"
					/>
				</div>
				<div className="my-4">
					<label className="text-xl mr-4 text-gray-500">Author:</label>
					<input
						type="text"
						className="border-2 border-gray-400 px-4 py-2 rounded-lg w-full"
						value={author}
						onChange={e => setAuthor(e.target.value)}
						placeholder="Enter book Author"
					/>
				</div>
				<div className="my-4">
					<label className="text-xl mr-4 text-gray-500">Publish Year:</label>
					<input
						type="number"
						className="border-2 border-gray-400 px-4 py-2 rounded-lg w-full"
						value={publishYear}
						onChange={e => setPublishYear(e.target.value)}
						placeholder="Enter book Publish Year"
					/>
				</div>
				<button
					type="button"
					onClick={handleSaveBook}
					className="bg-sky-300 p-2 m-8"
				>
					Save
				</button>
			</div>
		</div>
	);
};

export default CreateBooks;
