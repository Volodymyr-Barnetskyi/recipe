import {Mutation} from 'apollo-angular';
import {Injectable} from '@angular/core';
import gql from 'graphql-tag';
@Injectable({
  providedIn: 'root'
})
// tslint:disable-next-line:class-name
export class deleteGQL extends Mutation {
  document = gql`
    mutation deleteItem($id: String!) {
      deleteItem( id: $id){
        id
      }
    }
  `;
}
