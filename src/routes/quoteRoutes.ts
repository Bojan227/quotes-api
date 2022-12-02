import express from 'express';

const route = express.Router();

route.get('/', getQuotes);
route.get('/random-quote', getRandomQuote);

export default route;
