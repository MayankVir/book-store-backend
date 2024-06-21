import ErrorHandler from '../utils/errorHandling';

import { User } from "../entities/User";

export class BookRepository {
  async getUserById(userId: number): Promise<User | null> {
    try {
      // Query to fetch the user from the database, including the balance
      const query = 'SELECT id, name, email, balance FROM users WHERE id = $1';
      const result = await db.query(query, [userId]);

      if (result.rows.length === 0) {
        return null; // User not found
      }

      const { id, name, email, balance } = result.rows[0];
      return { id, name, email, balance };
    } catch (error) {
      ErrorHandler.logError(error, 'BookRepository.getUserById');
      throw error;
    }
  }

  async updateUserBalance(userId: number, balance: number): Promise<void> {
    try {
      // Query to update the user's balance in the database
      const query = 'UPDATE users SET balance = $1 WHERE id = $2';
      await db.query(query, [balance, userId]);
    } catch (error) {
      ErrorHandler.logError(error, 'BookRepository.updateUserBalance');
      throw error;
    }
  }
    return {
      id: userId,
      name: "Mayank Virmani",
      email: "mayank@virmani.com",
      balance: 100.0,
    };
  }

  async updateUserBalance(userId: number, balance: number): Promise<void> {}
}
