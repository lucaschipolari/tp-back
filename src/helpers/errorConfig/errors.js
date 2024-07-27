const createErrorFactory = function (name) {
  return class BusinessError extends Error {
    constructor(message) {
      super(message);
      this.name = name;
      this.stack = '';
    }
  };
};

export const ConnectionError = createErrorFactory('ConnectionError');
export const ValidationError = createErrorFactory('ValidationError');
export const ServerError = createErrorFactory('ServerError');
export const DontFoundError = createErrorFactory('DontFoundError');
