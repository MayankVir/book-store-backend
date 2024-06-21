import { BookRepository } from "../repositories/bookRepository";

import ErrorHandler from '../utils/errorHandling';
import en from '../locales/en.json';
import fr from '../locales/fr.json';

import { books } from "../constants";

const bookRepository = new BookRepository();

export class BookService {
  async buyBook(userId: number, bookId: number): Promise<boolean> {
    try {
      const book = books.find((book) => book.id === bookId);
      const user = await bookRepository.getUserById(userId);

      if (!book || !user) {
        return false; // Book or user not found
      }
      if (user.balance < book.price) {
        const errorMessage = user.locale === 'fr' ? fr.errors.insufficientBalance : en.errors.insufficientBalance;
        throw new Error(errorMessage);
      }

      user.balance -= book.price;
      await bookRepository.updateUserBalance(userId, user.balance);

      return true;
    } catch (error) {
      ErrorHandler.logError(error, 'BookService.buyBook');
      throw error;
    }
  }
}
