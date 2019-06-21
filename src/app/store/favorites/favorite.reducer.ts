import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Product } from '../../models/product.model';
import { FavoriteActions, FavoritesActionTypes } from './favorite.actions';

export const adapter: EntityAdapter<Product> =
  createEntityAdapter<Product>();

export interface FavoriteState extends EntityState<Product> {
}

export const initialState: FavoriteState = adapter.getInitialState();

export function FavoriteReducers(state = initialState, action: FavoriteActions): FavoriteState {
  switch (action.type) {

    case FavoritesActionTypes.AddProductToFavorites:
      return adapter.addOne(action.product, state);

    case FavoritesActionTypes.RemoveProductFromFavorites:
      return adapter.removeOne(action.product.id, state);

    default:
      return state;
  }
}

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors();
