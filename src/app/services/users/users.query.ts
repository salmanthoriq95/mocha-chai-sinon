class UsersQuery {
  users: { userId: number; name: string }[];
  constructor() {
    this.users = [
      { userId: 0, name: 'real user 1' },
      { userId: 1, name: 'real user 2' },
      { userId: 2, name: 'real user 3' },
      { userId: 3, name: 'real user 4' },
      { userId: 4, name: 'real user 5' },
    ];
  }
  async readUsers(userId?: number) {
    for (let i = 0; i < this.users.length; i++) {
      const userData = this.users[i];
      if (userId && userData.userId === +userId) {
        return userData;
      }
    }
    return this.users;
  }

  async addUser(name: string) {
    const user = {
      userId: this.users[this.users.length - 1].userId + 1,
      name,
    };
    this.users.push(user);
    return this.users;
  }

  async updateUser(user: { userId: number; name: string }) {
    for (let i = 0; i < this.users.length; i++) {
      const userData = this.users[i];
      if (userData.userId === +user.userId) {
        this.users[i] = user;
        break;
      }
    }
    return this.users;
  }

  async deleteUser(userId: number) {
    for (let i = 0; i < this.users.length; i++) {
      const userData = this.users[i];
      if (userData.userId === +userId) {
        this.users.splice(i, 1);
        break;
      }
    }
    return this.users;
  }
}

export default new UsersQuery();
