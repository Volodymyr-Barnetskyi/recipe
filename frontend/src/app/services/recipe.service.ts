import { Injectable } from '@angular/core';
import {Recipes} from '../mock-recipes';
import {Recipe} from '../recipe';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
    constructor(private http: HttpClient) {
      console.log(environment.production);
    }
     httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
  };
    url = `${environment.apikey}/items`;
   getItem(): Observable<any> {
  return this.http.get(this.url, this.httpOptions);
    }

    deleteHero(id: string): Observable<{}> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url, this.httpOptions);
  }
  getRecipes(): Observable<Recipe[]> {
    return of(Recipes);
  }
  getRecipe(id: number): Observable<Recipe> {
    return of(Recipes.find(recipe => recipe.id === id));
}
  // addHero(hero): Observable<Hero> {
  //   //   return this.http.post<Hero>(this.url, hero, this.httpOptions);
  //   // }
}
