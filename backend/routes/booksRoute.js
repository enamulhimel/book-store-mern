import express from 'express';
import { Book } from '../models/bookmodel.js';

const router = express.Router(); // Fixed

router.post('/create-book', async (req, res) => {
	try {
		if (!req.body.title || !req.body.author || !req.body.publishYear) {
			return res
				.status(400)
				.send({ message: 'Please provide all required fields' });
		}
		const newBook = {
			title: req.body.title,
			author: req.body.author,
			publishYear: req.body.publishYear,
		};
		const book = await Book.create(newBook);
		return res.status(201).send(book);
	} catch (error) {
		console.log(error.message); // Fixed
		res.status(500).send({ message: error.message }); // Fixed
	}
});
//get all books
router.get('/', async (req, res) => {
	try {
		const books = await Book.find({}); // Fixed
		return res.status(200).json({
			count: books.length,
			data: books, // Fixed
		}); // Fixed
	} catch (error) {
		console.log(error.message); // Fixed
		res.status(500).send({ message: error.message }); // Fixed
	}
});

//get one books by id
router.get('/:id', async (req, res) => {
	try {
		const { id } = req.params; // Fixed
		const books = await Book.findById(id); // Fixed
		return res.status(200).json(books); // Fixed
	} catch (error) {
		console.log(error.message); // Fixed
		res.status(500).send({ message: error.message }); // Fixed
	}
});

//update one book by id
router.put('/edit-book/:id', async (req, res) => {
	try {
		if (!req.body.title || !req.body.author || !req.body.publishYear) {
			return res
				.status(400)
				.send({ message: 'Please provide all required fields' });
		}
		const { id } = req.params; // Fixed
		const result = await Book.findByIdAndUpdate(id, req.body);
		if (!result) {
			return res.status(404).send({ message: 'Book not found' }); // Fixed
		}
		return res.status(200).send({ message: 'Book updated successfully' }); // Fixed
	} catch (error) {
		console.log(error.message); // Fixed
		res.status(500).send({ message: error.message }); // Fixed
	}
});

//delete one book by id
router.delete('/delete-book/:id', async (req, res) => {
	try {
		const { id } = req.params; // Fixed
		const result = await Book.findByIdAndDelete(id); // Fixed
		if (!result) {
			return res.status(404).send({ message: 'Book not found' }); // Fixed
		}
		return res.status(200).send({ message: 'Book deleted successfully' }); // Fixed
	} catch (error) {
		console.log(error.message); // Fixed
		res.status(500).send({ message: error.message }); // Fixed
	}
});

export default router;
