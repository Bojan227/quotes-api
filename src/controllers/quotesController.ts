import { Request, Response } from 'express';
import quotesDB from '../db/index';

export async function getQuotes(request: Request, response: Response) {
  const { page } = request.query;

  try {
    const quotes = await quotesDB.getQuotes(Number(page));
    response.status(200).json(quotes);
  } catch (error) {
    response.status(404).json({
      error: 'Cannot find any quotes.Please try refreshing your page',
    });
  }
}

export async function getRandomQuote(request: Request, response: Response) {
  try {
    const quote = await quotesDB.getRandomQuote();

    response.status(200).json(quote);
  } catch (error) {
    response.status(404).json({
      error: 'Failed to find random quote. Please try refreshing your page',
    });
  }
}

export async function generateNewQuotes(request: Request, response: Response) {
  try {
    const newQuotes = await quotesDB.generateQuotes();

    response
      .status(200)
      .json({ newQuotes, message: 'Successfully generated new quotes' });
  } catch (error) {
    response.status(404).json({
      error: 'Failed to generate new quotes. We are working on the problem',
    });
  }
}
