import { Request, Response } from "express";
import { books, booksPerPage } from "../constants";
import { BookService } from "../services/bookService";

const bookService = new BookService();

/**
 * @swagger
 * /api/buy-book:
 *   post:
 *     summary: Buy a book
 *     description: Purchase a book by its ID with the specified user ID.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *               bookId:
 *                 type: integer
 *             example:
 *               userId: 123
 *               bookId: 456
 *     responses:
 *       200:
 *         description: Book purchased successfully.
 *       400:
 *         description: Failed to buy book. Check stock and balance.
 *       500:
 *         description: Internal server error.
 */
export const buyBook = async (req: Request, res: Response) => {
  try {
    const { userId, bookId } = req.body;
    const success = await bookService.buyBook(userId, bookId);
    if (success) {
      res.status(200).json({ message: "Book purchased successfully!" });
    } else {
      res
        .status(400)
        .json({ message: "Failed to buy book. Check stock and balance." });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * @swagger
 * /api/books-by-offset:
 *   get:
 *     summary: Get books with offset
 *     description: Retrieve a paginated list of books with the specified offset.
 *     parameters:
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *         required: false
 *         description: Offset value for pagination. Defaults to 0 if not provided.
 *     responses:
 *       200:
 *         description: A list of books.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *       500:
 *         description: Internal server error.
 */
export const getBooksByOffset = async (req: Request, res: Response) => {
  try {
    const offset = parseInt(req.query.offset as string, 10) || 0;

    const paginatedBooks = books.slice(offset, offset + booksPerPage);

    res.status(200).json({ books: paginatedBooks });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
