import HttpCodes from 'http-status-codes';
import {
  DontFoundError,
  ServerError,
} from '../../../helpers/errorConfig/errors.js';
import Task from '../../../models/taskModel.js';

export class PutController {
  static async putController(req, res, next) {
    const {
      body,
      params: { id },
    } = req;
    try {
      const action = await Task.updateOne(
        {
          _id: id,
        },
        body,
      );
      if (action.matchedCount === 0) {
        const dontFoundError = new DontFoundError('Dont found task');
        return next(dontFoundError);
      }
      res.status(HttpCodes.OK).json({
        data: null,
        message: 'Task updated successfully',
      });
    } catch (err) {
      return next(new ServerError(err.message));
    }
  }
}

export default PutController;
