import {Component, Input, OnInit} from '@angular/core';
import {RecipeService} from '../../services/recipe.service';
import {Recipes} from '../../mock-recipes';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {createGQL} from '../../services/createGQL.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() title;
  @Input() description;
  @Input() ingredients;
  constructor(public recipeService: RecipeService, public creategql: createGQL) { }
  form: FormGroup;
  allitem = Recipes;
  ngOnInit() { this.form  = new FormGroup({
    title: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    description: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    ingredients: new FormControl(null, [Validators.required, Validators.minLength(3)])
  });
  }
  onSubmit() {
    this.creategql.mutate({
      title: this.form.value.title,
      description: this.form.value.description,
      ingredients: this.form.value.ingredients
    }).subscribe();
  }
}
