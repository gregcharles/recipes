import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
        'Veggie Burger',
        'Heat up  a veggie burger',
        'https://assets.bonappetit.com/photos/57acae2d1b33404414975121/16:9/w_5120,c_limit/ultimate-veggie-burger.jpg'),
    new Recipe(
          'Bleeding Armadillo Cake',
          'Eww, gross!',
          'https://images.notquitenigella.com/images/armadillo-cake/__red-velvet-armadillo-cake-33.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
