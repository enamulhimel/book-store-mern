import express from 'express';
import { PORT, DB_URL } from './config.js';
import mongoose from 'mongoose';
import { book } from './models/bookmodel.js';
import booksRoute from './routes/booksRoute.js';

const app = express();

app.use(express.json());

app.use('/books', booksRoute);
mongoose
	.connect(DB_URL)
	.then(() => {
		console.log('Connected to MongoDB');
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	})
	.catch(err => {
		console.error('Error connecting to MongoDB', err);
	});
