import HttpCodes from 'http-status-codes';
import Task from '../../../models/taskModel.js';
import { ServerError } from '../../../helpers/errorConfig/errors.js';

class GetController {
  static async getController(_, res, next) {
    try {
      const tasks = await Task.find({ isActive: true });

      const taskFiltered = tasks.map((task) => {
        return {
          id: task._id,
          title: task.title,
          description: task.description,
          status: task.status,
          createdAt: task.createdAt,
          isActive: task.isActive,
        };
      });
      res.status(HttpCodes.OK).json({
        data: taskFiltered,
        message: 'Tasks fetched successfully',
      });
    } catch (err) {
      next(new ServerError(err.message));
    }
  }
}

export default GetController;
