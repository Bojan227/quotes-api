import express, { Express, Request, Response } from 'express';
import quotesDB from './db';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());
// routes
import quoteRoutes from './routes/quoteRoutes';
app.use('/quotes', quoteRoutes);

app.listen(port || 3000, () => {
  quotesDB.generateQuotes();
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
