// errorHandler.js
import HttpCodes from 'http-status-codes';
import {
  ServerError,
  ValidationError,
  ConnectionError,
} from '../helpers/errorConfig/errors.js';

const errorHandler = (err, req, res, next) => {
  // Verifica si los encabezados ya han sido enviados
  if (res.headersSent) {
    return next(err); // Delega al siguiente middleware si los encabezados ya están enviados
  }

  // Manejo de errores específicos
  if (err instanceof ValidationError) {
    return res.status(HttpCodes.BAD_REQUEST).json({
      data: null,
      message: err.message,
    });
  }
  if (err instanceof ConnectionError) {
    return res.status(HttpCodes.SERVICE_UNAVAILABLE).json({
      data: null,
      message: err.message,
    });
  }
  if (err instanceof ServerError) {
    return res.status(HttpCodes.INTERNAL_SERVER_ERROR).json({
      data: null,
      message: err.message,
    });
  }
  // Manejo de errores generales
  return res.status(HttpCodes.INTERNAL_SERVER_ERROR).json({
    data: null,
    message: 'An unexpected error occurred',
  });
};

export default errorHandler;
