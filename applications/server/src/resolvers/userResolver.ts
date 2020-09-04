/* eslint-disable @typescript-eslint/no-unused-vars */
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import argon2 from 'argon2';
import { User, UserModel } from '../models/User';
import UserInput from './userInput';
import { generateJwtToken } from '../helpers/auth';

@Resolver((of) => User)
class UserResolver {
  private readonly userModel = UserModel;

  @Query((returns) => User, { nullable: false })
  async userByID(@Arg('id') id: string): Promise<User> {
    return this.userModel.findById({ _id: id });
  }

  @Mutation((returns) => String)
  async register(
    @Arg('input') { email, password }: UserInput
  ): Promise<string> {
    const hashedPassword = await argon2.hash(password);

    const newUser = await (
      await this.userModel.create({
        email,
        password: hashedPassword,
      })
    ).save();

    return generateJwtToken(newUser);
  }
}

export default UserResolver;
