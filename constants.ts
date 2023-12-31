export const booksPerPage = 8;

export const books = [
  {
    id: Math.floor(Math.random() * 350),
    type: "Fiction",
    title: "The Great Gatsby",
    description: "A classic novel by F. Scott Fitzgerald.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 9.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Non-Fiction",
    title: "Sapiens: A Brief History of Humankind",
    description: "A fascinating book by Yuval Noah Harari.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 12.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Mystery",
    title: "The Da Vinci Code",
    description: "An intriguing mystery novel by Dan Brown.",
    discountRate: 25,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 14.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Science Fiction",
    title: "Dune",
    description: "A science fiction epic by Frank Herbert.",
    discountRate: 30,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 11.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Fantasy",
    title: "Harry Potter and the Sorcerer's Stone",
    description: "The first book in the Harry Potter series by J.K. Rowling.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 9.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Fiction",
    title: "The Great Gatsby",
    description: "A classic novel by F. Scott Fitzgerald.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 9.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Non-Fiction",
    title: "Sapiens: A Brief History of Humankind",
    description: "A fascinating book by Yuval Noah Harari.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 12.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Mystery",
    title: "The Da Vinci Code",
    description: "An intriguing mystery novel by Dan Brown.",
    discountRate: 25,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 14.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Science Fiction",
    title: "Dune",
    description: "A science fiction epic by Frank Herbert.",
    discountRate: 30,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 11.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Fantasy",
    title: "Harry Potter and the Sorcerer's Stone",
    description: "The first book in the Harry Potter series by J.K. Rowling.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 8.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Romance",
    title: "Pride and Prejudice",
    description: "A classic romance novel by Jane Austen.",
    discountRate: 5,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 7.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Thriller",
    title: "The Girl with the Dragon Tattoo",
    description: "A gripping thriller by Stieg Larsson.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 10.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Biography",
    title: "Becoming",
    description: "Michelle Obama's inspiring autobiography.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 13.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "History",
    title: "The Guns of August",
    description: "A historical account of World War I by Barbara W. Tuchman.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 9.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Science",
    title: "Cosmos",
    description: "Carl Sagan's exploration of the universe.",
    discountRate: 25,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 11.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Self-Help",
    title: "The Power of Habit",
    description: "Charles Duhigg's guide to understanding habits.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 8.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Business",
    title: "Good to Great",
    description: "Jim Collins' study of successful companies.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 12.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Psychology",
    title: "Thinking, Fast and Slow",
    description: "Daniel Kahneman's exploration of human cognition.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 14.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Cooking",
    title: "The Joy of Cooking",
    description: "A comprehensive cookbook by Irma S. Rombauer.",
    discountRate: 5,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 19.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Travel",
    title: "Eat, Pray, Love",
    description: "Elizabeth Gilbert's memoir of self-discovery through travel.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 10.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Fiction",
    title: "The Great Gatsby",
    description: "A classic novel by F. Scott Fitzgerald.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 9.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Non-Fiction",
    title: "Sapiens: A Brief History of Humankind",
    description: "A fascinating book by Yuval Noah Harari.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 12.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Mystery",
    title: "The Da Vinci Code",
    description: "An intriguing mystery novel by Dan Brown.",
    discountRate: 25,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 14.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Science Fiction",
    title: "Dune",
    description: "A science fiction epic by Frank Herbert.",
    discountRate: 30,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 11.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Fantasy",
    title: "Harry Potter and the Sorcerer's Stone",
    description: "The first book in the Harry Potter series by J.K. Rowling.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 8.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Romance",
    title: "Pride and Prejudice",
    description: "A classic romance novel by Jane Austen.",
    discountRate: 5,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 7.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Thriller",
    title: "The Girl with the Dragon Tattoo",
    description: "A gripping thriller by Stieg Larsson.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 10.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Biography",
    title: "Becoming",
    description: "Michelle Obama's inspiring autobiography.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 13.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "History",
    title: "The Guns of August",
    description: "A historical account of World War I by Barbara W. Tuchman.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 9.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Science",
    title: "Cosmos",
    description: "Carl Sagan's exploration of the universe.",
    discountRate: 25,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 11.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Self-Help",
    title: "The Power of Habit",
    description: "Charles Duhigg's guide to understanding habits.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 8.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Business",
    title: "Good to Great",
    description: "Jim Collins' study of successful companies.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 12.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Psychology",
    title: "Thinking, Fast and Slow",
    description: "Daniel Kahneman's exploration of human cognition.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 14.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Cooking",
    title: "The Joy of Cooking",
    description: "A comprehensive cookbook by Irma S. Rombauer.",
    discountRate: 5,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 19.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Travel",
    title: "Eat, Pray, Love",
    description: "Elizabeth Gilbert's memoir of self-discovery through travel.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 10.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Fiction",
    title: "The Great Gatsby",
    description: "A classic novel by F. Scott Fitzgerald.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 9.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Non-Fiction",
    title: "Sapiens: A Brief History of Humankind",
    description: "A fascinating book by Yuval Noah Harari.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 12.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Mystery",
    title: "The Da Vinci Code",
    description: "An intriguing mystery novel by Dan Brown.",
    discountRate: 25,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 14.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Science Fiction",
    title: "Dune",
    description: "A science fiction epic by Frank Herbert.",
    discountRate: 30,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 11.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Fantasy",
    title: "Harry Potter and the Sorcerer's Stone",
    description: "The first book in the Harry Potter series by J.K. Rowling.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 8.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Romance",
    title: "Pride and Prejudice",
    description: "A classic romance novel by Jane Austen.",
    discountRate: 5,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 7.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Thriller",
    title: "The Girl with the Dragon Tattoo",
    description: "A gripping thriller by Stieg Larsson.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 10.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Biography",
    title: "Becoming",
    description: "Michelle Obama's inspiring autobiography.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 13.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "History",
    title: "The Guns of August",
    description: "A historical account of World War I by Barbara W. Tuchman.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 9.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Science",
    title: "Cosmos",
    description: "Carl Sagan's exploration of the universe.",
    discountRate: 25,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 11.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Self-Help",
    title: "The Power of Habit",
    description: "Charles Duhigg's guide to understanding habits.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 8.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Business",
    title: "Good to Great",
    description: "Jim Collins' study of successful companies.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 12.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Psychology",
    title: "Thinking, Fast and Slow",
    description: "Daniel Kahneman's exploration of human cognition.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 14.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Cooking",
    title: "The Joy of Cooking",
    description: "A comprehensive cookbook by Irma S. Rombauer.",
    discountRate: 5,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 19.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Travel",
    title: "Eat, Pray, Love",
    description: "Elizabeth Gilbert's memoir of self-discovery through travel.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 10.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Fiction",
    title: "The Great Gatsby",
    description: "A classic novel by F. Scott Fitzgerald.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 9.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Non-Fiction",
    title: "Sapiens: A Brief History of Humankind",
    description: "A fascinating book by Yuval Noah Harari.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 12.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Mystery",
    title: "The Da Vinci Code",
    description: "An intriguing mystery novel by Dan Brown.",
    discountRate: 25,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 14.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Science Fiction",
    title: "Dune",
    description: "A science fiction epic by Frank Herbert.",
    discountRate: 30,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 11.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Fantasy",
    title: "Harry Potter and the Sorcerer's Stone",
    description: "The first book in the Harry Potter series by J.K. Rowling.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 8.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Romance",
    title: "Pride and Prejudice",
    description: "A classic romance novel by Jane Austen.",
    discountRate: 5,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 7.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Thriller",
    title: "The Girl with the Dragon Tattoo",
    description: "A gripping thriller by Stieg Larsson.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 10.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Biography",
    title: "Becoming",
    description: "Michelle Obama's inspiring autobiography.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 13.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "History",
    title: "The Guns of August",
    description: "A historical account of World War I by Barbara W. Tuchman.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 9.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Science",
    title: "Cosmos",
    description: "Carl Sagan's exploration of the universe.",
    discountRate: 25,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 11.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Self-Help",
    title: "The Power of Habit",
    description: "Charles Duhigg's guide to understanding habits.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 8.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Business",
    title: "Good to Great",
    description: "Jim Collins' study of successful companies.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 12.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Psychology",
    title: "Thinking, Fast and Slow",
    description: "Daniel Kahneman's exploration of human cognition.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 14.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Cooking",
    title: "The Joy of Cooking",
    description: "A comprehensive cookbook by Irma S. Rombauer.",
    discountRate: 5,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 19.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Travel",
    title: "Eat, Pray, Love",
    description: "Elizabeth Gilbert's memoir of self-discovery through travel.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 10.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Fiction",
    title: "The Great Gatsby",
    description: "A classic novel by F. Scott Fitzgerald.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 9.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Non-Fiction",
    title: "Sapiens: A Brief History of Humankind",
    description: "A fascinating book by Yuval Noah Harari.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 12.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Mystery",
    title: "The Da Vinci Code",
    description: "An intriguing mystery novel by Dan Brown.",
    discountRate: 25,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 14.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Science Fiction",
    title: "Dune",
    description: "A science fiction epic by Frank Herbert.",
    discountRate: 30,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 11.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Fantasy",
    title: "Harry Potter and the Sorcerer's Stone",
    description: "The first book in the Harry Potter series by J.K. Rowling.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 8.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Romance",
    title: "Pride and Prejudice",
    description: "A classic romance novel by Jane Austen.",
    discountRate: 5,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 7.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Thriller",
    title: "The Girl with the Dragon Tattoo",
    description: "A gripping thriller by Stieg Larsson.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 10.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Biography",
    title: "Becoming",
    description: "Michelle Obama's inspiring autobiography.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 13.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "History",
    title: "The Guns of August",
    description: "A historical account of World War I by Barbara W. Tuchman.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 9.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Science",
    title: "Cosmos",
    description: "Carl Sagan's exploration of the universe.",
    discountRate: 25,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 11.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Self-Help",
    title: "The Power of Habit",
    description: "Charles Duhigg's guide to understanding habits.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 8.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Business",
    title: "Good to Great",
    description: "Jim Collins' study of successful companies.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 12.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Psychology",
    title: "Thinking, Fast and Slow",
    description: "Daniel Kahneman's exploration of human cognition.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 14.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Cooking",
    title: "The Joy of Cooking",
    description: "A comprehensive cookbook by Irma S. Rombauer.",
    discountRate: 5,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 19.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Travel",
    title: "Eat, Pray, Love",
    description: "Elizabeth Gilbert's memoir of self-discovery through travel.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 10.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Fiction",
    title: "The Great Gatsby",
    description: "A classic novel by F. Scott Fitzgerald.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 9.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Non-Fiction",
    title: "Sapiens: A Brief History of Humankind",
    description: "A fascinating book by Yuval Noah Harari.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 12.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Mystery",
    title: "The Da Vinci Code",
    description: "An intriguing mystery novel by Dan Brown.",
    discountRate: 25,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 14.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Science Fiction",
    title: "Dune",
    description: "A science fiction epic by Frank Herbert.",
    discountRate: 30,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 11.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Fantasy",
    title: "Harry Potter and the Sorcerer's Stone",
    description: "The first book in the Harry Potter series by J.K. Rowling.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 8.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Romance",
    title: "Pride and Prejudice",
    description: "A classic romance novel by Jane Austen.",
    discountRate: 5,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 7.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Thriller",
    title: "The Girl with the Dragon Tattoo",
    description: "A gripping thriller by Stieg Larsson.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 10.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Biography",
    title: "Becoming",
    description: "Michelle Obama's inspiring autobiography.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 13.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "History",
    title: "The Guns of August",
    description: "A historical account of World War I by Barbara W. Tuchman.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 9.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Science",
    title: "Cosmos",
    description: "Carl Sagan's exploration of the universe.",
    discountRate: 25,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 11.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Self-Help",
    title: "The Power of Habit",
    description: "Charles Duhigg's guide to understanding habits.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 8.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Business",
    title: "Good to Great",
    description: "Jim Collins' study of successful companies.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 12.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Psychology",
    title: "Thinking, Fast and Slow",
    description: "Daniel Kahneman's exploration of human cognition.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 14.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Cooking",
    title: "The Joy of Cooking",
    description: "A comprehensive cookbook by Irma S. Rombauer.",
    discountRate: 5,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 19.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Travel",
    title: "Eat, Pray, Love",
    description: "Elizabeth Gilbert's memoir of self-discovery through travel.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 10.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Fiction",
    title: "The Great Gatsby",
    description: "A classic novel by F. Scott Fitzgerald.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 9.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Non-Fiction",
    title: "Sapiens: A Brief History of Humankind",
    description: "A fascinating book by Yuval Noah Harari.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 12.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Mystery",
    title: "The Da Vinci Code",
    description: "An intriguing mystery novel by Dan Brown.",
    discountRate: 25,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 14.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Science Fiction",
    title: "Dune",
    description: "A science fiction epic by Frank Herbert.",
    discountRate: 30,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 11.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Fantasy",
    title: "Harry Potter and the Sorcerer's Stone",
    description: "The first book in the Harry Potter series by J.K. Rowling.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 8.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Romance",
    title: "Pride and Prejudice",
    description: "A classic romance novel by Jane Austen.",
    discountRate: 5,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 7.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Thriller",
    title: "The Girl with the Dragon Tattoo",
    description: "A gripping thriller by Stieg Larsson.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 10.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Biography",
    title: "Becoming",
    description: "Michelle Obama's inspiring autobiography.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 13.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "History",
    title: "The Guns of August",
    description: "A historical account of World War I by Barbara W. Tuchman.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 9.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Science",
    title: "Cosmos",
    description: "Carl Sagan's exploration of the universe.",
    discountRate: 25,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 11.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Self-Help",
    title: "The Power of Habit",
    description: "Charles Duhigg's guide to understanding habits.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 8.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Business",
    title: "Good to Great",
    description: "Jim Collins' study of successful companies.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 12.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Psychology",
    title: "Thinking, Fast and Slow",
    description: "Daniel Kahneman's exploration of human cognition.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 14.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Cooking",
    title: "The Joy of Cooking",
    description: "A comprehensive cookbook by Irma S. Rombauer.",
    discountRate: 5,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 19.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Travel",
    title: "Eat, Pray, Love",
    description: "Elizabeth Gilbert's memoir of self-discovery through travel.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 10.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Fiction",
    title: "The Great Gatsby",
    description: "A classic novel by F. Scott Fitzgerald.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 9.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Non-Fiction",
    title: "Sapiens: A Brief History of Humankind",
    description: "A fascinating book by Yuval Noah Harari.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 12.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Mystery",
    title: "The Da Vinci Code",
    description: "An intriguing mystery novel by Dan Brown.",
    discountRate: 25,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 14.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Science Fiction",
    title: "Dune",
    description: "A science fiction epic by Frank Herbert.",
    discountRate: 30,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 11.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Fantasy",
    title: "Harry Potter and the Sorcerer's Stone",
    description: "The first book in the Harry Potter series by J.K. Rowling.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 8.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Romance",
    title: "Pride and Prejudice",
    description: "A classic romance novel by Jane Austen.",
    discountRate: 5,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 7.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Thriller",
    title: "The Girl with the Dragon Tattoo",
    description: "A gripping thriller by Stieg Larsson.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 10.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Biography",
    title: "Becoming",
    description: "Michelle Obama's inspiring autobiography.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 13.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "History",
    title: "The Guns of August",
    description: "A historical account of World War I by Barbara W. Tuchman.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 9.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Science",
    title: "Cosmos",
    description: "Carl Sagan's exploration of the universe.",
    discountRate: 25,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 11.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Self-Help",
    title: "The Power of Habit",
    description: "Charles Duhigg's guide to understanding habits.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 8.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Business",
    title: "Good to Great",
    description: "Jim Collins' study of successful companies.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 12.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Psychology",
    title: "Thinking, Fast and Slow",
    description: "Daniel Kahneman's exploration of human cognition.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 14.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Cooking",
    title: "The Joy of Cooking",
    description: "A comprehensive cookbook by Irma S. Rombauer.",
    discountRate: 5,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 19.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Travel",
    title: "Eat, Pray, Love",
    description: "Elizabeth Gilbert's memoir of self-discovery through travel.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 10.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Fiction",
    title: "The Great Gatsby",
    description: "A classic novel by F. Scott Fitzgerald.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 9.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Non-Fiction",
    title: "Sapiens: A Brief History of Humankind",
    description: "A fascinating book by Yuval Noah Harari.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 12.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Mystery",
    title: "The Da Vinci Code",
    description: "An intriguing mystery novel by Dan Brown.",
    discountRate: 25,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 14.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Science Fiction",
    title: "Dune",
    description: "A science fiction epic by Frank Herbert.",
    discountRate: 30,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 11.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Fantasy",
    title: "Harry Potter and the Sorcerer's Stone",
    description: "The first book in the Harry Potter series by J.K. Rowling.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 8.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Romance",
    title: "Pride and Prejudice",
    description: "A classic romance novel by Jane Austen.",
    discountRate: 5,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 7.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Thriller",
    title: "The Girl with the Dragon Tattoo",
    description: "A gripping thriller by Stieg Larsson.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 10.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Biography",
    title: "Becoming",
    description: "Michelle Obama's inspiring autobiography.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 13.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "History",
    title: "The Guns of August",
    description: "A historical account of World War I by Barbara W. Tuchman.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 9.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Science",
    title: "Cosmos",
    description: "Carl Sagan's exploration of the universe.",
    discountRate: 25,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 11.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Self-Help",
    title: "The Power of Habit",
    description: "Charles Duhigg's guide to understanding habits.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 8.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Business",
    title: "Good to Great",
    description: "Jim Collins' study of successful companies.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 12.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Psychology",
    title: "Thinking, Fast and Slow",
    description: "Daniel Kahneman's exploration of human cognition.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 14.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Cooking",
    title: "The Joy of Cooking",
    description: "A comprehensive cookbook by Irma S. Rombauer.",
    discountRate: 5,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 19.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Travel",
    title: "Eat, Pray, Love",
    description: "Elizabeth Gilbert's memoir of self-discovery through travel.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 10.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Fiction",
    title: "The Great Gatsby",
    description: "A classic novel by F. Scott Fitzgerald.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 9.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Non-Fiction",
    title: "Sapiens: A Brief History of Humankind",
    description: "A fascinating book by Yuval Noah Harari.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 12.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Mystery",
    title: "The Da Vinci Code",
    description: "An intriguing mystery novel by Dan Brown.",
    discountRate: 25,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 14.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Science Fiction",
    title: "Dune",
    description: "A science fiction epic by Frank Herbert.",
    discountRate: 30,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 11.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Fantasy",
    title: "Harry Potter and the Sorcerer's Stone",
    description: "The first book in the Harry Potter series by J.K. Rowling.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 8.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Romance",
    title: "Pride and Prejudice",
    description: "A classic romance novel by Jane Austen.",
    discountRate: 5,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 7.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Thriller",
    title: "The Girl with the Dragon Tattoo",
    description: "A gripping thriller by Stieg Larsson.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 10.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Biography",
    title: "Becoming",
    description: "Michelle Obama's inspiring autobiography.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 13.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "History",
    title: "The Guns of August",
    description: "A historical account of World War I by Barbara W. Tuchman.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 9.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Science",
    title: "Cosmos",
    description: "Carl Sagan's exploration of the universe.",
    discountRate: 25,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 11.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Self-Help",
    title: "The Power of Habit",
    description: "Charles Duhigg's guide to understanding habits.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 8.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Business",
    title: "Good to Great",
    description: "Jim Collins' study of successful companies.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 12.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Psychology",
    title: "Thinking, Fast and Slow",
    description: "Daniel Kahneman's exploration of human cognition.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 14.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Cooking",
    title: "The Joy of Cooking",
    description: "A comprehensive cookbook by Irma S. Rombauer.",
    discountRate: 5,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 19.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Travel",
    title: "Eat, Pray, Love",
    description: "Elizabeth Gilbert's memoir of self-discovery through travel.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 10.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Fiction",
    title: "The Great Gatsby",
    description: "A classic novel by F. Scott Fitzgerald.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 9.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Non-Fiction",
    title: "Sapiens: A Brief History of Humankind",
    description: "A fascinating book by Yuval Noah Harari.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 12.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Mystery",
    title: "The Da Vinci Code",
    description: "An intriguing mystery novel by Dan Brown.",
    discountRate: 25,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 14.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Science Fiction",
    title: "Dune",
    description: "A science fiction epic by Frank Herbert.",
    discountRate: 30,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 11.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Fantasy",
    title: "Harry Potter and the Sorcerer's Stone",
    description: "The first book in the Harry Potter series by J.K. Rowling.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 8.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Romance",
    title: "Pride and Prejudice",
    description: "A classic romance novel by Jane Austen.",
    discountRate: 5,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 7.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Thriller",
    title: "The Girl with the Dragon Tattoo",
    description: "A gripping thriller by Stieg Larsson.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 10.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Biography",
    title: "Becoming",
    description: "Michelle Obama's inspiring autobiography.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 13.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "History",
    title: "The Guns of August",
    description: "A historical account of World War I by Barbara W. Tuchman.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 9.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Science",
    title: "Cosmos",
    description: "Carl Sagan's exploration of the universe.",
    discountRate: 25,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 11.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Self-Help",
    title: "The Power of Habit",
    description: "Charles Duhigg's guide to understanding habits.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 8.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Business",
    title: "Good to Great",
    description: "Jim Collins' study of successful companies.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 12.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Psychology",
    title: "Thinking, Fast and Slow",
    description: "Daniel Kahneman's exploration of human cognition.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 14.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Cooking",
    title: "The Joy of Cooking",
    description: "A comprehensive cookbook by Irma S. Rombauer.",
    discountRate: 5,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 19.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Travel",
    title: "Eat, Pray, Love",
    description: "Elizabeth Gilbert's memoir of self-discovery through travel.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 10.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Fiction",
    title: "The Great Gatsby",
    description: "A classic novel by F. Scott Fitzgerald.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 9.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Non-Fiction",
    title: "Sapiens: A Brief History of Humankind",
    description: "A fascinating book by Yuval Noah Harari.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 12.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Mystery",
    title: "The Da Vinci Code",
    description: "An intriguing mystery novel by Dan Brown.",
    discountRate: 25,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 14.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Science Fiction",
    title: "Dune",
    description: "A science fiction epic by Frank Herbert.",
    discountRate: 30,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 11.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Fantasy",
    title: "Harry Potter and the Sorcerer's Stone",
    description: "The first book in the Harry Potter series by J.K. Rowling.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 8.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Romance",
    title: "Pride and Prejudice",
    description: "A classic romance novel by Jane Austen.",
    discountRate: 5,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 7.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Thriller",
    title: "The Girl with the Dragon Tattoo",
    description: "A gripping thriller by Stieg Larsson.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 10.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Biography",
    title: "Becoming",
    description: "Michelle Obama's inspiring autobiography.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 13.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "History",
    title: "The Guns of August",
    description: "A historical account of World War I by Barbara W. Tuchman.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 9.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Science",
    title: "Cosmos",
    description: "Carl Sagan's exploration of the universe.",
    discountRate: 25,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 11.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Self-Help",
    title: "The Power of Habit",
    description: "Charles Duhigg's guide to understanding habits.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 8.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Business",
    title: "Good to Great",
    description: "Jim Collins' study of successful companies.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 12.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Psychology",
    title: "Thinking, Fast and Slow",
    description: "Daniel Kahneman's exploration of human cognition.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 14.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Cooking",
    title: "The Joy of Cooking",
    description: "A comprehensive cookbook by Irma S. Rombauer.",
    discountRate: 5,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 19.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Travel",
    title: "Eat, Pray, Love",
    description: "Elizabeth Gilbert's memoir of self-discovery through travel.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 10.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Fiction",
    title: "The Great Gatsby",
    description: "A classic novel by F. Scott Fitzgerald.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 9.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Non-Fiction",
    title: "Sapiens: A Brief History of Humankind",
    description: "A fascinating book by Yuval Noah Harari.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 12.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Mystery",
    title: "The Da Vinci Code",
    description: "An intriguing mystery novel by Dan Brown.",
    discountRate: 25,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 14.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Science Fiction",
    title: "Dune",
    description: "A science fiction epic by Frank Herbert.",
    discountRate: 30,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 11.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Fantasy",
    title: "Harry Potter and the Sorcerer's Stone",
    description: "The first book in the Harry Potter series by J.K. Rowling.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 8.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Romance",
    title: "Pride and Prejudice",
    description: "A classic romance novel by Jane Austen.",
    discountRate: 5,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 7.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Thriller",
    title: "The Girl with the Dragon Tattoo",
    description: "A gripping thriller by Stieg Larsson.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 10.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Biography",
    title: "Becoming",
    description: "Michelle Obama's inspiring autobiography.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 13.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "History",
    title: "The Guns of August",
    description: "A historical account of World War I by Barbara W. Tuchman.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 9.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Science",
    title: "Cosmos",
    description: "Carl Sagan's exploration of the universe.",
    discountRate: 25,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 11.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Self-Help",
    title: "The Power of Habit",
    description: "Charles Duhigg's guide to understanding habits.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 8.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Business",
    title: "Good to Great",
    description: "Jim Collins' study of successful companies.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 12.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Psychology",
    title: "Thinking, Fast and Slow",
    description: "Daniel Kahneman's exploration of human cognition.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 14.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Cooking",
    title: "The Joy of Cooking",
    description: "A comprehensive cookbook by Irma S. Rombauer.",
    discountRate: 5,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 19.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Travel",
    title: "Eat, Pray, Love",
    description: "Elizabeth Gilbert's memoir of self-discovery through travel.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 10.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Fiction",
    title: "The Great Gatsby",
    description: "A classic novel by F. Scott Fitzgerald.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 9.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Non-Fiction",
    title: "Sapiens: A Brief History of Humankind",
    description: "A fascinating book by Yuval Noah Harari.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 12.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Mystery",
    title: "The Da Vinci Code",
    description: "An intriguing mystery novel by Dan Brown.",
    discountRate: 25,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 14.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Science Fiction",
    title: "Dune",
    description: "A science fiction epic by Frank Herbert.",
    discountRate: 30,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 11.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Fantasy",
    title: "Harry Potter and the Sorcerer's Stone",
    description: "The first book in the Harry Potter series by J.K. Rowling.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 8.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Romance",
    title: "Pride and Prejudice",
    description: "A classic romance novel by Jane Austen.",
    discountRate: 5,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 7.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Thriller",
    title: "The Girl with the Dragon Tattoo",
    description: "A gripping thriller by Stieg Larsson.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 10.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Biography",
    title: "Becoming",
    description: "Michelle Obama's inspiring autobiography.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 13.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "History",
    title: "The Guns of August",
    description: "A historical account of World War I by Barbara W. Tuchman.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 9.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Science",
    title: "Cosmos",
    description: "Carl Sagan's exploration of the universe.",
    discountRate: 25,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 11.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Self-Help",
    title: "The Power of Habit",
    description: "Charles Duhigg's guide to understanding habits.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 8.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Business",
    title: "Good to Great",
    description: "Jim Collins' study of successful companies.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 12.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Psychology",
    title: "Thinking, Fast and Slow",
    description: "Daniel Kahneman's exploration of human cognition.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 14.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Cooking",
    title: "The Joy of Cooking",
    description: "A comprehensive cookbook by Irma S. Rombauer.",
    discountRate: 5,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 19.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Travel",
    title: "Eat, Pray, Love",
    description: "Elizabeth Gilbert's memoir of self-discovery through travel.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 10.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Fiction",
    title: "The Great Gatsby",
    description: "A classic novel by F. Scott Fitzgerald.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 9.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Non-Fiction",
    title: "Sapiens: A Brief History of Humankind",
    description: "A fascinating book by Yuval Noah Harari.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 12.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Mystery",
    title: "The Da Vinci Code",
    description: "An intriguing mystery novel by Dan Brown.",
    discountRate: 25,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 14.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Science Fiction",
    title: "Dune",
    description: "A science fiction epic by Frank Herbert.",
    discountRate: 30,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 11.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Fantasy",
    title: "Harry Potter and the Sorcerer's Stone",
    description: "The first book in the Harry Potter series by J.K. Rowling.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 8.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Romance",
    title: "Pride and Prejudice",
    description: "A classic romance novel by Jane Austen.",
    discountRate: 5,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 7.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Thriller",
    title: "The Girl with the Dragon Tattoo",
    description: "A gripping thriller by Stieg Larsson.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 10.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Biography",
    title: "Becoming",
    description: "Michelle Obama's inspiring autobiography.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 13.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "History",
    title: "The Guns of August",
    description: "A historical account of World War I by Barbara W. Tuchman.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 9.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Science",
    title: "Cosmos",
    description: "Carl Sagan's exploration of the universe.",
    discountRate: 25,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 11.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Self-Help",
    title: "The Power of Habit",
    description: "Charles Duhigg's guide to understanding habits.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 8.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Business",
    title: "Good to Great",
    description: "Jim Collins' study of successful companies.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 12.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Psychology",
    title: "Thinking, Fast and Slow",
    description: "Daniel Kahneman's exploration of human cognition.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 14.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Cooking",
    title: "The Joy of Cooking",
    description: "A comprehensive cookbook by Irma S. Rombauer.",
    discountRate: 5,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 19.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Travel",
    title: "Eat, Pray, Love",
    description: "Elizabeth Gilbert's memoir of self-discovery through travel.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 10.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Fiction",
    title: "The Great Gatsby",
    description: "A classic novel by F. Scott Fitzgerald.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 9.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Non-Fiction",
    title: "Sapiens: A Brief History of Humankind",
    description: "A fascinating book by Yuval Noah Harari.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 12.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Mystery",
    title: "The Da Vinci Code",
    description: "An intriguing mystery novel by Dan Brown.",
    discountRate: 25,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 14.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Science Fiction",
    title: "Dune",
    description: "A science fiction epic by Frank Herbert.",
    discountRate: 30,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 11.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Fantasy",
    title: "Harry Potter and the Sorcerer's Stone",
    description: "The first book in the Harry Potter series by J.K. Rowling.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 8.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Romance",
    title: "Pride and Prejudice",
    description: "A classic romance novel by Jane Austen.",
    discountRate: 5,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 7.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Thriller",
    title: "The Girl with the Dragon Tattoo",
    description: "A gripping thriller by Stieg Larsson.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 10.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Biography",
    title: "Becoming",
    description: "Michelle Obama's inspiring autobiography.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 13.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "History",
    title: "The Guns of August",
    description: "A historical account of World War I by Barbara W. Tuchman.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 9.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Science",
    title: "Cosmos",
    description: "Carl Sagan's exploration of the universe.",
    discountRate: 25,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 11.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Self-Help",
    title: "The Power of Habit",
    description: "Charles Duhigg's guide to understanding habits.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 8.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Business",
    title: "Good to Great",
    description: "Jim Collins' study of successful companies.",
    discountRate: 20,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 12.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Psychology",
    title: "Thinking, Fast and Slow",
    description: "Daniel Kahneman's exploration of human cognition.",
    discountRate: 10,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 14.49,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Cooking",
    title: "The Joy of Cooking",
    description: "A comprehensive cookbook by Irma S. Rombauer.",
    discountRate: 5,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 19.99,
  },
  {
    id: Math.floor(Math.random() * 350),
    type: "Travel",
    title: "Eat, Pray, Love",
    description: "Elizabeth Gilbert's memoir of self-discovery through travel.",
    discountRate: 15,
    coverImage: `https://picsum.photos/536/${
      Math.floor(Math.random() * 350) + 340
    }`,
    price: 10.99,
  },
];
