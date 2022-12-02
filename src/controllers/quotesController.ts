import { Request, Response } from 'express';
import quotesDB from '../db/index';

export async function getQuotes(request: Request, response: Response) {
  const { page } = request.query;

  try {
    const quotes = await quotesDB.getQuotes(Number(page));
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

export async function generateNewQuotes(request: Request, response: Response) {
  try {
    await quotesDB.generateQuotes();

    response
      .status(200)
      .json({ page: 0, message: 'Successfully generated new quotes' });
  } catch (error) {
    response
      .status(404)
      .json({ error: 'Failed to generate new quotes. Try again' });
  }
}
