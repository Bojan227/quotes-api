import express from 'express';
import { getQuotes, getRandomQuote } from '../controllers/quotesController';
const route = express.Router();

route.get('/', getQuotes);
route.get('/random-quote', getRandomQuote);

export default route;
