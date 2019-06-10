import * as fromProducts from './../product/product.reducer';
import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers';

export const selectProductState = (state: AppState) => state.productsState;

export const getSearchQuery = (state: AppState) => state.productsState.searchQuery;

export const selectAllProducts = createSelector(
  selectProductState,
  fromProducts.selectAll
);

export const selectAllProductsBasedOnQuery = createSelector(
  [getSearchQuery, selectAllProducts],
  (searchQuery, allProducts) => {
    if (searchQuery === undefined || searchQuery === '') {
      return allProducts;
    } else {
      return allProducts.filter(product => (
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.type.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }
);
