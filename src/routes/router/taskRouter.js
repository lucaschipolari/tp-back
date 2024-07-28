import express from 'express';
import Task from '../../controllers/task/index.js';
import validationBody from '../../middlewares/validation.js';
import taskValidation from '../../schemas/taskValidation.js';

const taskRouter = express.Router();

taskRouter.post(
  '/',
  (req, res, next) => validationBody(req, res, next, taskValidation),
  Task.PostController.postController,
);

taskRouter.get('/', Task.GetController.getController);

taskRouter.put(
  '/:id',
  (req, res, next) => validationBody(req, res, next, taskValidation),
  Task.PutController.putController,
);

taskRouter.delete('/:id', Task.DeleteController.deleteController);

export default taskRouter;
