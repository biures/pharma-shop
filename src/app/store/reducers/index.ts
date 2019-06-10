import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { ProductReducers } from '../product/product.reducer';
import { EntityState } from '@ngrx/entity';
import { Product } from '../../models/product.model';

export interface AppState {
  productsState: ProductState;
}

export interface ProductState extends EntityState<Product> {

}


export const reducers: ActionReducerMap<AppState> = {
  productsState: ProductReducers
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
