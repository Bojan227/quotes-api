import express, { Express, Request, Response } from 'express';

import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.listen(port || 3000, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
