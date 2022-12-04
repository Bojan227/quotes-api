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

    const collections = await db.listCollections().toArray();
    const collectionNames = collections.map((c) => c.name);

    if (collectionNames.length !== 0) {
      collection.drop();
    }

    const quotes = await fetchQuotes();

    if (quotes) {
      collection.insertMany(quotes.data);
    }
    console.log('Database seeded! :)');
    return quotes.data.slice(0, 10);
  } catch (error) {
    console.log(error);
  }
}

async function getQuotes(page: number) {
  const db = await makeDb();
  return await db
    .collection('quotes')
    .find({})
    .skip(page * 10)
    .limit(10)
    .toArray();
}

async function getRandomQuote() {
  const db = await makeDb();
  return await db
    .collection('quotes')
    .aggregate([{ $sample: { size: 1 } }])
    .toArray();
}
