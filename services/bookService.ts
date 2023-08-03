import { BookRepository } from "../repositories/bookRepository";

import { books } from "../constants";

const bookRepository = new BookRepository();

export class BookService {
  async buyBook(userId: number, bookId: number): Promise<boolean> {
    try {
      const book = books.find((book) => book.id === bookId);
      const user = await bookRepository.getUserById(userId);

      if (!book || !user || user.balance < book.price) {
        return false;
      }

      user.balance -= book.price;
      await bookRepository.updateUserBalance(userId, user.balance);

      return true;
    } catch (error) {
      throw error;
    }
  }
}
