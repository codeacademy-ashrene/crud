const { server } = require('../../server');

describe('deleteUser', () => {
  const options = {
    url: '/user/Jane',
    method: 'DELETE',
  };
  it('should add a new user', async () => {
    const response = await server.inject(options);
    expect(response.result).toEqual('DELETED USER');
  });
});
