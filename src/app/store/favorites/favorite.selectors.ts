import * as fromFavorites from './../favorites/favorite.reducer';
import { AppState } from '../index';
import { createSelector } from '@ngrx/store';

export const selectFavoriteState = (state: AppState) => state.favoritesState;

export const selectAllFavoriteProducts = createSelector(
  selectFavoriteState,
  fromFavorites.selectAll
);

export const getFavoriteCount = createSelector(selectAllFavoriteProducts, allFavorites => {
  return allFavorites.length;
});
