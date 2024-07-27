import HttpCodes from 'http-status-codes';
import TaskModel from '../../../models/taskModel.js';
import {
  ValidationError,
  ServerError,
} from '../../../helpers/errorConfig/errors.js';

export class PostController {
  static async postController(req, res, next) {
    const { body } = req;
    const task = new TaskModel({
      title: body.title,
      description: body.description,
      content: body.content,
    });
    try {
      const result = await task.save();
      res.status(HttpCodes.OK).json({
        data: result,
        message: 'Task created successfully',
      });
    } catch (err) {
      if (err instanceof ValidationError) {
        return next(err);
      }

      return next(new ServerError('An error occurred saving the task'));
    }
  }
}

export default PostController;
