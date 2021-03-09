import { Field, InputType } from 'type-graphql';
import { Length } from 'class-validator';
import { User } from '../models/User';

@InputType()
export class RegisterInput implements Partial<User> {
  @Field()
  @Length(1, 50)
  username!: string;

  @Field()
  @Length(1, 100)
  password!: string;
}
