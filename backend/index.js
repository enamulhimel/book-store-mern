import express from 'express';
import { PORT, DB_URL } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

app.use(express.json());

//Middleware to handle CORS
//option 1: Allow all origins with default of cors(*)
app.use(cors());

//option 2: Allow specific origin with cors({origin: 'http://localhost:3000'})
// app.use(
// 	cors({
// 		origin: 'http://localhost:5173',
// 	})
// );

app.get('/', (req, res) => {
	console.log('Hello World!');
	return res.status(200).json({ message: 'Hello World!' });
});

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
