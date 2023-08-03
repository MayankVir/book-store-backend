import { User } from "../entities/User";

export class BookRepository {
  async getUserById(userId: number): Promise<User | undefined> {
    return {
      id: userId,
      name: "Mayank Virmani",
      email: "mayank@virmani.com",
      balance: 100.0,
    };
  }

  async updateUserBalance(userId: number, balance: number): Promise<void> {}
}
