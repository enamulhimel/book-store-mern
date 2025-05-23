import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox } from 'react-icons/md';
import { MdOutlineDelete } from 'react-icons/md';
import { PiBookOpenTextThin } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import BookModal from './BookModal';
import { useState } from 'react';
import { BiShow } from 'react-icons/bi';
const BookSingleCard = ({ book, key }) => {
	const [showModal, setShowModal] = useState(false);
	return (
		<div className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-lg">
			<h4 className="my-2 text-gray-500">{key}</h4>
			<div className="flex justify-start items-center gap-x-2">
				<PiBookOpenTextThin className="text-2xl text-red-300" />
				<h2 className="text-xl font-bold">{book.title}</h2>
			</div>
			<div className="flex justify-start items-center gap-x-2">
				<BiUserCircle className="text-2xl text-red-300" />
				<h2 className="text-xl font-bold">{book.author}</h2>
			</div>
			<p className="absolute top-1 right-2 px-4 py-1 rounded-lg bg-red-300">
				{book.publishYear}
			</p>
			<div className="flex justify-center gap-x-4 mt-4">
				<BiShow
					className="text-2xl text-blue-800 hover:text-black cursor-pointer"
					onClick={() => setShowModal(true)}
				/>
				<Link to={`/books/details/${book._id}`}>
					<BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
				</Link>
				<Link to={`/books/edit-book/${book._id}`}>
					<AiOutlineEdit className="text-2xl text-yellow-800 hover:text-black" />
				</Link>
				<Link to={`/books/delete-book/${book._id}`}>
					<MdOutlineDelete className="text-2xl text-red-800 hover:text-black" />
				</Link>
			</div>
			{showModal && (
				<BookModal book={book} onClose={() => setShowModal(false)} key={key} />
			)}
		</div>
	);
};

export default BookSingleCard;
