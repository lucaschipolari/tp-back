import HttpCodes from 'http-status-codes';
import {
  DontFoundError,
  ServerError,
} from '../../../helpers/errorConfig/errors.js';
import Task from '../../../models/taskModel.js';

export class DeleteController {
  static async deleteController(req, res, next) {
    const {
      params: { id },
    } = req;
    try {
      const action = await Task.updateOne(
        {
          _id: id,
          isActive: true,
        },
        {
          isActive: false,
        },
      );
      if (action.matchedCount === 0) {
        const dontFoundError = new DontFoundError('Dont found task');
        return next(dontFoundError);
      }
      res.status(HttpCodes.OK).json({
        data: null,
        message: 'Task deleted successfully',
      });
    } catch (err) {
      return next(new ServerError(err.message));
    }
  }
}

export default DeleteController;
