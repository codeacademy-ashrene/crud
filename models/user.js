module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {});
  // User.associate = function(models) {
  //   // associations can be defined here
  // };
  User.generate = (firstName, lastName, email) => User.create({ firstName, lastName, email }); // POST

  User.getAllUsers = () => User.findAll(); // GET

  User.getUserByName = (firstName) => {
    User.findOne({
      where: {
        firstName: firstName,
      },
    });
  };

  User.deleteUser = (firstName) => { // DELETE
    User.destroy({
      where: {
        firstName: firstName,
      },
    });
  };

  User.updateUser = (firstName, newEmail) => { // PUT
    User.update({
      email: newEmail,
    }, {
      where: {
        firstName: firstName,
      },
    });
  };
  return User;
};
