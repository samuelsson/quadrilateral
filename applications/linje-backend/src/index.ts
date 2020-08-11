import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { connect } from 'mongoose';

import resolvers from './resolvers';

async function init(): Promise<void> {
  const schema = await buildSchema({
    resolvers,
    emitSchemaFile: true,
    validate: false,
  });

  // create mongoose connection
  const mongoose = await connect('mongodb://localhost:27017/data', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await mongoose.connection;

  const server = new ApolloServer({ schema });
  const app = express();

  server.applyMiddleware({ app });
  app.listen({ port: 4000 }, () => console.log('server running'));
}

init().catch((error) => {
  console.log('error', error);
});
