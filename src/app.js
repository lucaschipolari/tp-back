import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import cookieParser from 'cookie-parser';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(errorHandler);

app.use('/api');

export default app;
