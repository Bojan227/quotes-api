import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import makeQuotesDb from './quotesDB';
dotenv.config();
const url = process.env.MONGO_URI;
const client = new MongoClient(url);

export async function makeDb() {
  if (!client) {
    await client.connect();
  }
  return client.db('quotes-api');
}

const quotesDB = makeQuotesDb({ makeDb });
export default quotesDB;
