import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output()
  recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
        'Veggie Burger',
        'Heat up  a veggie burger',
        '/assets/images/ultimate-veggie-burger.jpg'),
    new Recipe(
          'Bleeding Armadillo Cake',
          'Eww, gross!',
          '/assets/images/__red-velvet-armadillo-cake-33.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
