import React from 'react';
import { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
const EditBook = () => {
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [publishYear, setPublishYear] = useState('');
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		setLoading(true);
		axios
			.get(`http://localhost:5555/books/edit-book/${id}`)
			.then(res => {
				console.log(res);
				setTitle(res.data.title);
				setAuthor(res.data.author);
				setPublishYear(res.data.publishYear);
				setLoading(false);
			})
			.catch(err => {
				console.log(err);
				// alert('Error fetching book details');
				setLoading(false);
			});
	}, []);

	const handleEditBook = async () => {
		const data = {
			title,
			author,
			publishYear,
		};
		// console.log(data);
		setLoading(true);
		await axios
			.put(`http://localhost:5555/books/edit-book/${id}`, data)
			.then(res => {
				console.log(res);
				setLoading(false);
				alert('Book Edited successfully');
				navigate('/');
			})
			.catch(err => {
				console.log(err);
				alert('Error Editing book');
				setLoading(false);
			});
	};

	return (
		<div>
			<BackButton />
			<h1 className="text-3xl my-4">Edit Book</h1>
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
					onClick={handleEditBook}
					className="bg-sky-300 p-2 m-8"
				>
					Save
				</button>
			</div>
		</div>
	);
};

export default EditBook;
