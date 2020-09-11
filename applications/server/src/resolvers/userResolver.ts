/* eslint-disable @typescript-eslint/no-unused-vars */
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import argon2 from 'argon2';
import { ValidationError } from 'class-validator';
import { User, UserModel } from '../models/User';
import UserInput from './userInput';
import { generateJwtToken } from '../helpers/auth';

@Resolver((of) => User)
class UserResolver {
  private readonly userModel = UserModel;

  @Query((returns) => String)
  async login(@Arg('input') { email, password }: UserInput): Promise<String> {
    const user = await this.userModel.findOne({ email });

    if (!user) {
      // TODO: Throw correct error for no user found
      throw new ValidationError();
    }

    const validPassword = await argon2.verify(user.password, password);

    if (!validPassword) {
      // TODO: Throw correct error for invalid password
      throw new ValidationError();
    }

    return generateJwtToken(user);
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
