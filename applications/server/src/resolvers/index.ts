import { NonEmptyArray } from 'type-graphql/dist/interfaces/NonEmptyArray';
import userResolver from './userResolver';

// eslint-disable-next-line @typescript-eslint/ban-types
const resolvers: NonEmptyArray<Function> | NonEmptyArray<string> = [
  userResolver,
];

export default resolvers;
