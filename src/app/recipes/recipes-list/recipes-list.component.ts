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
        'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_1460,h_1825/k%2Farchive%2F9fbb73a7cba9b7b75c3d05484f6b6d087470641d'),
    new Recipe(
          'Bleeding Armadillo Cake',
          'Eww, gross!',
          'https://images.notquitenigella.com/images/armadillo-cake/__red-velvet-armadillo-cake-33.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
