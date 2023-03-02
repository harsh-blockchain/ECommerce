export const resolvers = {
    Query: {
        books: () => books,
    },
};
const books = [
    {
        title: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling",
    },
];
