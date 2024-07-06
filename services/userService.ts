import { BookRepository } from '../repositories/bookRepository';

class UserService {
  private bookRepository: BookRepository;

  constructor(bookRepository: BookRepository) {
    this.bookRepository = bookRepository;
  }

  async onboardUser(userId: number): Promise<void> {
    const user = await this.bookRepository.getUserById(userId);

    if (user && user.isNew) {
      // Perform onboarding tasks for new users
      await this.bookRepository.updateUserBalance(userId, 500.0, true);
      // Additional onboarding tasks, if any
    }
  }
}
