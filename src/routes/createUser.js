const Joi = require('joi');
const createUserHandler = require('../handlers/createUserHandler');

module.exports = [{
  path: '/user',
  method: 'POST',
  handler: createUserHandler,
  config: {
    validate: {
      payload: {
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().required(),
      },
    },
  },
}];
