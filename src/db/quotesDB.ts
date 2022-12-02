import { makeDb } from '.';
import fetchQuotes from './fetchQuotes';

interface Document {
  [key: string]: any;
}

export default function makeQuotesDb({ makeDb }: { makeDb: () => Document }) {
  return { getQuotes, getRandomQuote, generateQuotes };
}

async function generateQuotes() {
  try {
    const db = await makeDb();
    const collection = db.collection('quotes');
    if (collection) {
      collection.drop();
    }
    const quotes = await fetchQuotes();

    if (quotes) {
      collection.insertMany(quotes.data);
    }
    console.log('Database seeded! :)');
  } catch (error) {
    console.log(error);
  }
}

async function getQuotes() {
  const db = await makeDb();
  return await db.collection('quotes').find({}).toArray();
}
async function getRandomQuote() {
  const db = await makeDb();
  return await db
    .collection('quotes')
    .aggregate([{ $sample: { size: 1 } }])
    .toArray();
}
