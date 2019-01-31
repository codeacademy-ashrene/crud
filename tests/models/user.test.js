const model = require('../../models');

describe('generate', () => {
  beforeEach(async () => {
    await model.User.truncate();
  });
  it('should insert data into table', async () => {
    await model.User.generate('ashrene', 'roy', 'ashrene@xyz.com');
    await model.User.generate('ashrene', 'roy', 'ashrene@gmail.com');
    expect(await model.User.count()).toEqual(2);
  });
});

describe('getall', () => {
  beforeEach(() => {
    model.User.truncate();
  });
  afterAll(() => {
    model.sequelize.close();
  });
  it('should get user names', async () => {
    await model.User.generate('ashrene', 'roy', 'ashrene@xyz.com');
    await model.User.generate('ashrene', 'roy', 'ashrene@gmail.com');
    const users = await model.User.getAllUsers();
    expect(await users[1].firstName).toEqual('ashrene');
  });
  it('should get user emails', async () => {
    await model.User.generate('ashrene', 'roy', 'ashrene@xyz.com');
    await model.User.generate('ashrene', 'roy', 'ashrene@gmail.com');
    const users = await model.User.getAllUsers();
    expect(await users[0].email).toEqual('ashrene@xyz.com');
  });
  it('should give length 0 when no entries are there', async () => {
    const users = await model.User.getAllUsers();
    expect(await users.length).toEqual(0);
  });
});
