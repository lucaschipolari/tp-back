import HttpCodes from 'http-status-codes';
import {
  ServerError,
  ValidationError,
  ConnectionError,
  DontFoundError,
} from '../helpers/errorConfig/errors.js';

const errorHandler = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    res.status(HttpCodes.BAD_REQUEST).json({
      data: null,
      message: err.message,
    });
  } else if (err instanceof ConnectionError) {
    res.status(HttpCodes.SERVICE_UNAVAILABLE).json({
      data: null,
      message: err.message,
    });
  } else if (err instanceof ServerError) {
    res.status(HttpCodes.INTERNAL_SERVER_ERROR).json({
      data: null,
      message: err.message,
    });
  }
  if (err instanceof DontFoundError) {
    res.status(HttpCodes.NOT_FOUND).json({
      data: null,
      message: err.message,
    });
  } else {
    res.status(HttpCodes.INTERNAL_SERVER_ERROR).json({
      data: null,
      message: 'An unexpected error occurred',
    });
  }
};

export default errorHandler;
