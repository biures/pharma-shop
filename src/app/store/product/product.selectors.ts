import * as fromProducts from './../product/product.reducer';
import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers';

export const selectProductState = (state: AppState) => state.productsState;

export const getSearchQuery = (state: AppState) => state.productsState.filtering.searchQuery;

export const selectCategories = (state: AppState) => state.productsState.filtering.categories;

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
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      ));
    }
  }
);

export const selectAllProductsBasedOnCategories = createSelector(
  [selectAllProductsBasedOnQuery, selectCategories],
  (products, categories) => {
    if (categories === undefined || categories.length === 0) {
      return products;
    } else {
      let filteredProducts = [];
      categories.forEach(category => {
        filteredProducts = filteredProducts.concat(products.filter(product => product.category === category));
      });
      return filteredProducts;
    }
  }
);

export const selectProductCategories = createSelector(
  selectAllProductsBasedOnQuery, products => {
    return [...new Set(products.map(product => product.category))];
  }
);
