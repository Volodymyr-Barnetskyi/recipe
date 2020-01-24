import {Component, Input, OnInit} from '@angular/core';
import {RecipeService} from '../../services/recipe.service';
import {Recipes} from '../../mock-recipes';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private recipeService: RecipeService) { }

  public form: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    ingredients: new FormControl('')
  });
  allitem = Recipes;
  ngOnInit() {
  }
}
