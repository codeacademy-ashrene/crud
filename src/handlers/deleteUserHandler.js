const model = require('../../models');

module.exports = async (request, h) => {
  try {
    const user = await model.User.deleteUser(request.params.name);
    return h.response('DELETED USER');
  } catch (err) {
    return h.response('ERROR IN DELETING USER');
  }
};
