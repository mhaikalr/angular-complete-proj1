import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

    ingredients: Ingredient[];
    private subscription : Subscription;

    constructor(
        private _shoppingListService: ShoppingListService
    ) { }

    ngOnInit(): void {
        this.ingredients = this._shoppingListService.getIngredients();
        this.subscription = this._shoppingListService.ingredientsUpdated.subscribe((ingredients: Ingredient[]) => {
            this.ingredients = ingredients;
        })
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}
