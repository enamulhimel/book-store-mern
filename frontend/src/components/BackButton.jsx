import React from 'react';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const BackButton = ({ destination = '/' }) => {
	return (
		<div className="flex">
			<Link
				to={destination}
				className="bg-sky-800 text-white px-4 py-1 rounded-lg w-fit"
			>
				<BsArrowLeftCircle className="text-2xl" />
			</Link>
		</div>
	);
};

export default BackButton;
