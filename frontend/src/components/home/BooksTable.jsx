import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox } from 'react-icons/md';
import { MdOutlineDelete } from 'react-icons/md';
const BooksTable = ({ books }) => {
	return (
		<table className="w-full border-separate border-spacing-2">
			<thead>
				<tr>
					<th className="border border-slate-800 rounded-md">No</th>
					<th className="border border-slate-800 rounded-md">Title</th>
					<th className="border border-slate-800 rounded-md max-md:hidden">
						Author
					</th>
					<th className="border border-slate-800 rounded-md max-md:hidden">
						Publish Year
					</th>
					<th className="border border-slate-800 rounded-md">Actions</th>
				</tr>
			</thead>
			<tbody>
				{books.map((book, index) => (
					<tr key={book._id}>
						<td className="border border-slate-800 rounded-md text-center">
							{index + 1}
						</td>
						<td className="border border-slate-800 rounded-md text-center">
							{book.title}
						</td>
						<td className="border border-slate-800 rounded-md text-center max-md:hidden">
							{book.author}
						</td>
						<td className="border border-slate-800 rounded-md text-center max-md:hidden">
							{book.publishYear}
						</td>
						<td className="flex justify-center border border-slate-800 rounded-md text-center">
							<div className="flex justify-center gap-x-4">
								<Link to={`/books/details/${book._id}`}>
									<BsInfoCircle className="text-2xl text-green-800" />
								</Link>
								<Link to={`/books/edit-book/${book._id}`}>
									<AiOutlineEdit className="text-2xl text-yellow-800" />
								</Link>
								<Link to={`/books/delete-book/${book._id}`}>
									<MdOutlineDelete className="text-2xl text-red-800" />
								</Link>
							</div>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default BooksTable;
