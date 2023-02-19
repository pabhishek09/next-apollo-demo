import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import getPersons from './getPersons.js';

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const resolvers = {
  Query: {
    books: () => books,
    persons: () => getPersons(),
  },
};

const typeDefs = `
  type Book {
    title: String
    author: String
  }

  type Person {
    id: String
    name: String
    address: String
    email: String
    phone: String
  }

  type Query {
    books: [Book]
    persons: [Person]
  }

`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});


const { url } = await startStandaloneServer(server, {
  listen: { port: 5000 },
});

console.log(`🚀  Server ready at: ${url}`);
