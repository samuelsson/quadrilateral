/* eslint-disable @typescript-eslint/no-unused-vars */
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { User, UserModel } from '../models/User';
import UserInput from './userInput';

@Resolver((of) => User)
class UserResolver {
  private readonly userModel = UserModel;

  @Query((returns) => User, { nullable: false })
  async userByID(@Arg('id') id: string): Promise<User> {
    return this.userModel.findById({ _id: id });
  }

  @Mutation((returns) => User)
  async createUser(@Arg('data') { name, email }: UserInput): Promise<User> {
    return (
      await this.userModel.create({
        name,
        email,
      })
    ).save();
  }
}

export default UserResolver;
