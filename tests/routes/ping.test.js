const { server } = require('../../server');

describe('ping route', () => {
  const options = {
    url: '/ping',
    method: 'GET',
  };
  it('should respond with string value \'pong\'', async () => {
    const response = await server.inject(options);
    expect(typeof response.result).toEqual(typeof '');
    expect(response.result).toEqual('pong');
  });
  it('should give status code 200 for /GET call', async () => {
    const response = await server.inject(options);
    expect(response.statusCode).toEqual(200);
  });
});
