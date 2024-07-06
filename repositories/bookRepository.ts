import { User } from "../entities/User";

export class BookRepository {
  async getUserById(userId: number): Promise<User | undefined> {
    return {
      id: userId,
      name: "Mayank Virmani",
      email: "mayank@virmani.com",
      balance: 100.0,
      isNew: balance === 100.0, // Set isNew based on the default balance
    };
  }

  async updateUserBalance(userId: number, balance: number, isNew: boolean): Promise<void> {
  if (isNew) {
    balance = 500.0; // Example initial balance value
  }
  // Update the user's balance in the database
  // ...
}
}
