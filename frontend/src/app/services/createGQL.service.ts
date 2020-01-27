import {Injectable} from '@angular/core';
import {Mutation} from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
// tslint:disable-next-line:class-name
export class createGQL extends Mutation {
  document = gql`
    mutation create{
      create(input:
      {title: $title, description: $description, ingredients: $ingredients}) {
        id,
        title,
        description,
        ingredients
      }
    }
  `;
}
