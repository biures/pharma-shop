import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { ProductReducers, ProductState } from './product/product.reducer';
import { FavoriteReducers, FavoriteState } from './favorites/favorite.reducer';
import { CartReducers, CartState } from './cart/cart.reducer';

export interface AppState {
  productsState: ProductState;
  favoritesState: FavoriteState;
  cartState: CartState;
}

export const reducers: ActionReducerMap<AppState> = {
  productsState: ProductReducers,
  favoritesState: FavoriteReducers,
  cartState: CartReducers
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
