import { Action } from '@ngrx/store';
import { Product } from '../../models/product.model';

export enum FavoritesActionTypes {
  AddProductToFavorites = '[Favorites] Add Product to Favorites',
  RemoveProductFromFavorites = '[Favorites] Remove from Favorites',
  
}

export class AddProductToFavoritesAction implements Action {
  readonly type = FavoritesActionTypes.AddProductToFavorites;

  constructor(public product: Product) {
  }
}

export class RemoveProductFromFavoritesAction implements Action {
  readonly type = FavoritesActionTypes.RemoveProductFromFavorites;

  constructor(public product: Product) {
  }
}

export type FavoriteActions =
  AddProductToFavoritesAction |
  RemoveProductFromFavoritesAction;
