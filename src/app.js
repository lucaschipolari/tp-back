import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import cookieParser from 'cookie-parser';
import errorHandler from './middlewares/errorHandler.js';
import mainRouter from './Routes/mainRouter.js';
import taskRouter from './Routes/Router/taskRouter.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/api', mainRouter);
app.use('/api', taskRouter);

app.use(errorHandler);

export default app;
