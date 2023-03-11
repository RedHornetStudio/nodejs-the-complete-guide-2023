import * as dotenv from 'dotenv';
dotenv.config();
import express, { Express, Request, Response, NextFunction } from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response, next: NextFunction): void => {
  res.send('Hello world');
});

app.listen(process.env.SERVER_PORT, (): void => {
  console.log(`App listening on port ${process.env.SERVER_PORT}`);
});