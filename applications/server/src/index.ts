import 'reflect-metadata';
import express, { Request } from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'type-graphql';
import { connect } from 'mongoose';
import cors from 'cors';

// Load config (env variables) before everything else to ensure they are set.
import './config';
import resolvers from './resolvers';
import { authChecker, getContext } from './helpers/auth';

const { DB_HOST, DB_NAME, DB_PORT } = process.env;

async function init(): Promise<void> {
  const schema = await buildSchema({
    resolvers,
    authChecker,
    emitSchemaFile: true,
  });

  // create mongoose connection
  const mongoose = await connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`);
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
      context: getContext(req as Request),
      graphiql: true,
    }))
  );

  app.listen(4000, () => console.log('Server running on port 4000'));
}

init().catch((error) => {
  console.log('error', error);
});
