const pingRoutes = require('./ping');
const deleteUserRoutes = require('./deleteUser');
const createUserRoutes = require('./createUser');

module.exports = [
  ...pingRoutes,
  ...deleteUserRoutes,
  ...createUserRoutes,
];
