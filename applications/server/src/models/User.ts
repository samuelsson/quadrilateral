import { Field, ID, ObjectType } from 'type-graphql';
import { prop as Property, getModelForClass } from '@typegoose/typegoose';

@ObjectType({ description: 'The User model' })
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  @Property({ required: true, unique: true })
  email: string;

  // This has no `@Field()`, so the property is not public in the schema
  @Property({ required: true })
  password: string;

  @Field({ nullable: true })
  @Property()
  firstName?: string;

  @Field({ nullable: true })
  @Property()
  lastName?: string;
}

export const UserModel = getModelForClass(User);
