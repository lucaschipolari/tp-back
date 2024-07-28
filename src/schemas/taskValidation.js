import Joi from 'joi';

const taskValidation = Joi.object({
  title: Joi.string().min(3).max(100).required().messages({
    'string.min': 'Title must be at least 3 characters long',
    'string.max': 'Title must be at most 100 characters long',
    'any.required': 'Title is required',
    '*': 'Revisa los campos',
  }),
  description: Joi.string().min(10).max(500).required().messages({
    'string.min': 'Description must be at least 10 characters long',
    'string.max': 'Description must be at most 500 characters long',
    'any.required': 'Description is required',
    '*': 'Revisa los campos',
  }),
  content: Joi.string().min(20).max(1000).required().messages({
    'string.min': 'Content must be at least 20 characters long',
    'string.max': 'Content must be at most 1000 characters long',
    'any.required': 'Content is required',
    '*': 'Revisa los campos',
  }),
}).options({ abortEarly: false });

export default taskValidation;
