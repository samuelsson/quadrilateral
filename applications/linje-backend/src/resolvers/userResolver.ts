/* eslint-disable @typescript-eslint/no-unused-vars */
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import argon2 from 'argon2';
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
  async register(@Arg('data') { email, password }: UserInput): Promise<User> {
    const userExists = await this.userModel.exists({ email });

    if (userExists) {
      // TODO: Throw error here
    }
    const hashedPassword = await argon2.hash(password);

    return (
      await this.userModel.create({
        email,
        password: hashedPassword,
      })
    ).save();
  }
}

export default UserResolver;
