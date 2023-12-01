import usersQuery from './users.query';

class UsersService {
  async get(payload: { userId?: number }) {
    const queryResult = await usersQuery.readUsers(payload.userId);
    return queryResult;
  }
  async post(payload: { name: string }) {
    const queryResult = await usersQuery.addUser(payload.name);
    return queryResult;
  }
  async put(payload: { name: string; userId: number }) {
    const queryResult = await usersQuery.updateUser(payload);
    return queryResult;
  }
  async del(payload: { userId: number }) {
    return await usersQuery.deleteUser(payload.userId);
  }
}

export default new UsersService();
