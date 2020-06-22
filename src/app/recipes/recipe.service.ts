import {Recipe} from './recipes.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
        'Veggie Burger',
        'Heat up  a veggie burger',
        '/assets/images/ultimate-veggie-burger.jpg'),
    new Recipe(
        'Bleeding Armadillo Cake',
        'Eww, gross!',
        '/assets/images/__red-velvet-armadillo-cake-33.jpg'),
    new Recipe(
        'Bún Bò Huế',
        'Đừng hòng',
        '/assets/images/bun-bo-hue-done2.jpg')
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
