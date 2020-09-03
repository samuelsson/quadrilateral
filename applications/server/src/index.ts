import 'reflect-metadata';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'type-graphql';
import { connect } from 'mongoose';

import resolvers from './resolvers';

async function init(): Promise<void> {
  const schema = await buildSchema({
    resolvers,
    emitSchemaFile: true,
  });

  // create mongoose connection
  const mongoose = await connect('mongodb://localhost:27017/data', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await mongoose.connection;

  const app = express();

  await app.use(
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  app.listen(4000, () => console.log('Server running on port 4000'));
}

init().catch((error) => {
  console.log('error', error);
});
