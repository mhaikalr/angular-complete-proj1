import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipe-details',
    templateUrl: './recipe-details.component.html',
    styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {

    @Input() recipe: Recipe;
    constructor(
        private _recipeService: RecipeService
    ) {}

    ngOnInit(): void {}

    onAddToShoppingList() {
        this._recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    }
}
