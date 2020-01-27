import { Field, InputType } from 'type-graphql';

@InputType()
export class ItemInput {
  @Field()
  readonly title: string;
  @Field()
  readonly description: string;
  @Field(() => [String])
  readonly ingredients: string[];
}
