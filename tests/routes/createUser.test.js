const { server } = require('../../server');
const model = require('../../models');

describe('generate', () => {
  const options = {
    url: '/user',
    method: 'POST',
    payload: {
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'janedoe@jane.com',
    },
  };
  it('should add a new user', async () => {
    const response = await server.inject(options);
    // console.log(response);
    expect(response.result).toEqual('ADDED USER');
  });
  beforeEach(() => {
    model.User.truncate();
  });
  it('should return  entries in the table', async () => {
    await model.User.generate('ABCD');
    const users = await model.User.getAllUsers();
    expect(users.length).toEqual(1);
  });
});
