import { User } from "../entities/User";

export class BookRepository {
  async getUserById(userId: number): Promise<User | undefined> {
    return {
      id: userId,
      name: "Mayank Virmani",
      email: "virmanimayank15@gmail.com",
      balance: 100.0,
    };
  }

  async updateUserBalance(userId: number, balance: number): Promise<void> {}
}
