import { Field, InputType } from 'type-graphql';
import { IsEmail, Length } from 'class-validator';

@InputType()
class UserInput {
  @Field()
  @Length(1, 100)
  name: string;

  @Field()
  @IsEmail()
  @Length(1, 100)
  email: string;
}

export default UserInput;
