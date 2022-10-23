import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  
  recipes: Recipe[];
  
  constructor(
    private _recipeService: RecipeService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recipes = this._recipeService.getRecipes();
  }

  onNewRecipe() {
    this._router.navigate(['new'], { relativeTo: this._activatedRoute })
  }
}
