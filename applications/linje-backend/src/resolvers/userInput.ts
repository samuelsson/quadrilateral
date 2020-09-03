import { Field, InputType } from 'type-graphql';
import { IsEmail, Length } from 'class-validator';

@InputType()
class UserInput {
  @Field()
  @IsEmail()
  @Length(1, 100)
  email: string;

  @Field()
  @Length(1, 100)
  password: string;
}

export default UserInput;
