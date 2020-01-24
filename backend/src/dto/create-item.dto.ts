import { Field, ID, InputType, ObjectType } from 'type-graphql';
@ObjectType()
export class ItemObject {
  @Field(() => ID)
  id: string;
  @Field()
  readonly title: string;
  @Field()
  readonly description: string;
  @Field(type => [String])
  readonly ingredients: string[];
}
