import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox } from 'react-icons/md';
import { MdOutlineDelete } from 'react-icons/md';
import { PiBookOpenTextThin } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import BookSingleCard from './BookSingleCard';
const BooksCard = ({ books }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
			{books.map(book => (
				<BookSingleCard key={book._id} book={book} />
			))}
		</div>
	);
};

export default BooksCard;
