import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipe-details',
    templateUrl: './recipe-details.component.html',
    styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {

    recipe: Recipe;
    id: number;

    constructor(
        private _recipeService: RecipeService,
        private _activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this._activatedRoute.params.subscribe((params: Params) => {
            this.id = +params.id;
            this.recipe = this._recipeService.getRecipeById(this.id);
        });
    }

    onAddToShoppingList() {
        this._recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    }
}
