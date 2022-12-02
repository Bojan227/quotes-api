import express from 'express';
import {
  getQuotes,
  getRandomQuote,
  generateNewQuotes,
} from '../controllers/quotesController';
const route = express.Router();

route.get('/', getQuotes);
route.get('/random-quote', getRandomQuote);
route.get('/generate', generateNewQuotes);

export default route;
