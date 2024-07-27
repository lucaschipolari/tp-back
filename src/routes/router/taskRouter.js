import express from 'express';
import Task from '../../controllers/task/index.js';

const taskRouter = express.Router();

taskRouter.post('/', Task.PostController.postController);

taskRouter.get('/', Task.GetController.getController);

taskRouter.put('/:id', Task.PutController.putController);

taskRouter.delete('/:id', Task.DeleteController.deleteController);

export default taskRouter;
