/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-classes-per-file */
import {
  Arg,
  Ctx,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  UnauthorizedError,
} from 'type-graphql';
import argon2 from 'argon2';
import { ValidationError } from 'class-validator';
import { User, UserModel } from '../models/User';
import { AuthInput } from './userInput';
import { Context, generateJwtToken } from '../helpers/auth';

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

  @Mutation((returns) => AuthResponse)
  async login(
    @Arg('password') password: string,
    @Arg('username') username: string
  ): Promise<AuthResponse> {
    const user = await this.userModel.findOne({ username });

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
    @Arg('input') registerInput: AuthInput
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

  @Query((returns) => User)
  async profile(@Ctx() ctx: Context): Promise<User> {
    if (!ctx?.user?.id) {
      throw new UnauthorizedError();
    }

    // TODO: Fix if no user found
    const user = await this.userModel.findById(ctx?.user?.id);

    return user;
  }
}

export default UserResolver;
