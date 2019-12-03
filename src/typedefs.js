// const typeDefs = `
// schema {
//   query: Query
// }
// type Query {
//   books: Book
// }
// type Book {
//   id: ID
//   title: String!
//   description: String!
//   imageUrl: String!
//   rating: Float
//   health: String
// }
// `;

const typeDefs = `
schema {
  query: Query
}
type Query {
  books: Book,
}
type Book {
  date: String!
  book_id: String
  id: String
  book_author: String!
  book_name: String
  health: String
}
`;

export default typeDefs;