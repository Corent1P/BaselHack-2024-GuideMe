export class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async getAllUsers(includeGuide) {
    return await this.userRepository.getAllUsers(includeGuide);
  }

  async getUserById(id, includeGuide) {
    return await this.userRepository.getUserById(id, includeGuide);
  }

  async getUserByEmail(email, includeGuide) {
    return await this.userRepository.getUserByEmail(email, includeGuide);
  }

  async createUser(userData) {
    return await this.userRepository.createUser(userData);
  }

  async updateUser(id, userData) {
    return await this.userRepository.updateUser(id, userData);
  }

  async deleteUser(id) {
    return await this.userRepository.deleteUser(id);
  }
}
