import { Field, InputType } from 'type-graphql';
import { Length } from 'class-validator';

@InputType()
export class AuthInput {
  @Field()
  @Length(1, 50)
  username!: string;

  @Field()
  @Length(1, 100)
  password!: string;
}
