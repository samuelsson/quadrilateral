import 'reflect-metadata';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'type-graphql';
import { connect } from 'mongoose';
import cors from 'cors';

// Load config (env variables) before everything else to ensure they are set.
import './config';
import resolvers from './resolvers';
import { authChecker, getContext } from './helpers/auth';

async function init(): Promise<void> {
  const schema = await buildSchema({
    resolvers,
    authChecker,
    emitSchemaFile: true,
  });

  // create mongoose connection
  const mongoose = await connect('mongodb://localhost:27017/data', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  await mongoose.connection;

  const app = express();

  await app.use(
    cors({
      origin: process.env.ALLOW_ORIGIN,
      credentials: true,
    })
  );

  await app.use(
    graphqlHTTP((req) => ({
      schema,
      context: getContext(req),
      graphiql: true,
    }))
  );

  app.listen(4000, () => console.log('Server running on port 4000'));
}

init().catch((error) => {
  console.log('error', error);
});
