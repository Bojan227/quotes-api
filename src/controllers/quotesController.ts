import { Request, Response } from 'express';
import quotesDB from '../db/index';

export async function getQuotes(request: Request, response: Response) {
  try {
    const quotes = await quotesDB.getQuotes();

    response.status(200).json(quotes);
  } catch (error) {
    response.status(404).json(error);
  }
}

export async function getRandomQuote(request: Request, response: Response) {
  try {
    const quote = await quotesDB.getRandomQuote();

    response.status(200).json(quote);
  } catch (error) {
    response.status(404).json(error);
  }
}
