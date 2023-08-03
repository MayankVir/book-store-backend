import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { buyBook, getBooksByOffset } from "../controllers/bookController";

const app = express();
const port = 8000;

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Book Store API",
      description: "API documentation for the Book Store",
      version: "1.0.0",
    },
  },
  apis: ["./src/controllers/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Middleware
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// API Routes
app.post("/api/buy-book", buyBook);
app.get("/api/books-by-offset", getBooksByOffset);

// Initialize the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
