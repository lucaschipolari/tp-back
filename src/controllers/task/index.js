import DeleteController from './taskControllers/DeleteController.js';
import GetController from './taskControllers/GetController.js';
import PostController from './taskControllers/PostController.js';
import PutController from './taskControllers/PutController.js';

const Task = {
  PostController,
  GetController,
  PutController,
  DeleteController,
};

export default Task;
