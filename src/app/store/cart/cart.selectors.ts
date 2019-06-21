import * as fromCart from './../cart/cart.reducer';
import { AppState } from '../index';
import { createSelector } from '@ngrx/store';

export const selectCartState = (state: AppState) => state.cartState;

export const selectAllCartProducts = createSelector(
  selectCartState,
  fromCart.selectAll
);

export const getCartCount = createSelector(selectAllCartProducts, allProductsFromCart => {
  let count = 0;

  allProductsFromCart.forEach(product => {
    count = count + product.quantity;
  });

  return count;
});
