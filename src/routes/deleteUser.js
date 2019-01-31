const Joi = require('joi');
const deleteUserHandler = require('../handlers/deleteUserHandler');

module.exports = [{
  path: '/user/{name}',
  method: 'DELETE',
  handler: deleteUserHandler,
  config: {
    validate: {
      params: {
        name: Joi.string().required(),
      },
    },
  },
}];
