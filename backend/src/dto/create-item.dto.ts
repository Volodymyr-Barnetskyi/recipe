import { Field, ID, ObjectType } from 'type-graphql';
@ObjectType()
export class ItemObject {
  @Field(() => ID)
  id: string;
  @Field()
  readonly title: string;
  @Field()
  readonly description: string;
  @Field(() => [String])
  readonly ingredients: string[];
}
