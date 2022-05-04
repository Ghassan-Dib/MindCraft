import fs from 'fs';
import path from 'path';
import { ApolloServer } from 'apollo-server';
import { contacts } from './resolvers/Query';
import { context } from './constants/context';
import { createContact, updateContact, deleteContact } from './resolvers/Mutation';

const resolvers = {
  Query: { contacts },
  Mutation: { createContact, updateContact, deleteContact }
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8'),
  resolvers,
  context
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
