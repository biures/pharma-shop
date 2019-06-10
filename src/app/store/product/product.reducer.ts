import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Product } from '../../models/product.model';
import { ProductActions, ProductActionTypes } from './product.actions';
import { ProductState } from '../reducers';

export const adapter: EntityAdapter<Product> =
  createEntityAdapter<Product>();

export const initialState: ProductState = adapter.getInitialState({
  searchQuery: undefined
});

export function ProductReducers(state = initialState, action: ProductActions): ProductState {
  switch (action.type) {

    case ProductActionTypes.LoadProducts:
      return state;

    case ProductActionTypes.LoadProductsSuccess:
      return adapter.addAll(action.products, state);

    case ProductActionTypes.LoadProductsFail:
      return state;

    case ProductActionTypes.ChangeSearchQuery:
      return {...state, searchQuery: action.searchQuery};

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
