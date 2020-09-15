/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-classes-per-file */
import {
  Arg,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from 'type-graphql';
import argon2 from 'argon2';
import { ValidationError } from 'class-validator';
import { User, UserModel } from '../models/User';
import { RegisterInput } from './userInput';
import { generateJwtToken } from '../helpers/auth';

@ObjectType()
class AuthResponse {
  @Field(() => String, { nullable: true })
  token?: string;

  @Field(() => User, { nullable: true })
  user?: User;
}

@Resolver((of) => User)
class UserResolver {
  private readonly userModel = UserModel;

  @Query((returns) => AuthResponse)
  async login(
    @Arg('password') password: string,
    @Arg('email') email: string
  ): Promise<AuthResponse> {
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

    const token = generateJwtToken(user);

    return { user, token };
  }

  @Mutation((returns) => AuthResponse)
  async register(
    @Arg('input') registerInput: RegisterInput
  ): Promise<AuthResponse> {
    const password = await argon2.hash(registerInput.password);

    const user = await (
      await this.userModel.create({
        ...registerInput,
        password,
      })
    ).save();

    const token = generateJwtToken(user);

    return { user, token };
  }
}

export default UserResolver;
