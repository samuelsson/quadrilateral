import { Field, InputType } from 'type-graphql';
import { IsEmail, Length } from 'class-validator';

@InputType()
export class RegisterInput {
  @Field()
  @IsEmail()
  @Length(1, 100)
  email: string;

  @Field()
  @Length(1, 100)
  password: string;

  @Field({ nullable: true })
  @Length(1, 100)
  firstName: string;

  @Field({ nullable: true })
  @Length(1, 100)
  lastName: string;
}
