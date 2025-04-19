import React from 'react';
import { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteBook = () => {
	const [loading, setLoading] = useState(false);
	const { id } = useParams();
	const navigate = useNavigate();
	const handleDeleteBook = async () => {
		setLoading(true);
		try {
			await axios
				.delete(`http://localhost:5555/books/delete-book/${id}`)
				.then(res => {
					console.log(res);
					// setLoading(false);
					alert('Book deleted successfully');
					navigate('/');
				});
		} catch (error) {
			console.log(error);
			alert('Error deleting book');
			// setLoading(false);
		} finally {
			setLoading(false);
		}
	};
	return (
		<div className="p-4">
			<BackButton />
			<h1 className="text-3xl my-4">Delete Book</h1>
			{loading ? (
				<Spinner />
			) : (
				<div className="flex items-center justify-center flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
					<h1 className="text-2xl text-gray-500 my-4">
						Are you sure you want to delete this book?
					</h1>
					<div className="flex justify-end">
						<button
							className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
							onClick={handleDeleteBook}
						>
							Delete Book
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default DeleteBook;
