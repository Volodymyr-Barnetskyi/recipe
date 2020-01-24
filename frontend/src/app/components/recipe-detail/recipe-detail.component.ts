import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../recipe";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {RecipeService} from "../../services/recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  public res$;
  ngOnInit() {
   this.res$ = this.recipeService.getItem();
  }
  constructor(
    private location:Location,
    private route:ActivatedRoute,
    private recipeService:RecipeService) { }


  goBack(): void {
    this.location.back();
  }
  getRecipe(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.recipeService.getRecipe(id)
      .subscribe(recipe => this.recipe = recipe);
  }
}
