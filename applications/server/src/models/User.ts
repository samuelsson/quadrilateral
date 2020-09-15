/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, ID, ObjectType } from 'type-graphql';
import { prop as Property, getModelForClass } from '@typegoose/typegoose';

export type UserRole = 'ADMIN' | 'USER';

@ObjectType({ description: 'The User model' })
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  @Property({ required: true, unique: true })
  email: string;

  @Field((type) => [String])
  @Property({ required: true, default: [] })
  roles?: UserRole[];

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
