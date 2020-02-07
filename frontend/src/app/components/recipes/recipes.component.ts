import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../recipe';
import {RecipeService} from '../../services/recipe.service';
import {Apollo, Query} from 'apollo-angular';
import gql from 'graphql-tag';
import { ItemObject } from 'src/app/types';
import {deleteGQL} from '../../services/deleteGQL.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  public recipes: any;
  public selectedRecipe;
  public res$: any;
  public create: any;
  @Input() id: string;
  constructor(
    private recipeService: RecipeService, public apollo: Apollo, public deleteGQL: deleteGQL) {}

  ngOnInit() {
    this.recipes = this.apollo.watchQuery({
      query: gql`
      query full{
        full {
        id,
        title,
        description,
        ingredients
        }
      }
      `
    }).valueChanges;
   // this.res$ = this.recipeService.getItem();
    /*this.recipes$ = this.recipeService.getRecipes();*/
  }
  OnSelect(item: Recipe) {
    this.selectedRecipe = item;
  }
  OnDelete(index: string) {
    this.deleteGQL.mutate({
      id: index
    }).subscribe();
  }
}
