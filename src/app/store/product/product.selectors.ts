import * as fromProducts from './../product/product.reducer';
import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers';

export const selectProductState = (state: AppState) => state.productsState;

export const selectAllProducts = createSelector(
  selectProductState,
  fromProducts.selectAll
);
