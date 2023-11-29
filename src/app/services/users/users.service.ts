class UsersService {
  async get(payload: any) {
    return 'users get';
  }
  async post(payload: any) {
    return 'user post';
  }
  async put(payload: any) {
    return 'user put';
  }
  async del(payload: any) {
    return 'user del';
  }
}

export default new UsersService();
