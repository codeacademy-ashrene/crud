const model = require('../../models');

module.exports = async (request, h) => {
  try {
    const users = await model.User.generate(request.payload.firstName, request.payload.lastName, request.payload.email);
    return h.response('ADDED USER');
  } catch (err) {
    return h.response('ERROR IN ADDING USER');
  }
};
