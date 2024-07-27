import express from 'express';
import taskRouter from './router/taskRouter.js';

const mainRouter = express.Router();

mainRouter.use('/task', taskRouter);

export default mainRouter;
