import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Product } from '../../models/product.model';
import { ProductActions, ProductActionTypes } from './product.actions';

export const adapter: EntityAdapter<Product> =
  createEntityAdapter<Product>();

export interface ProductState extends EntityState<Product> {
  filtering: {
    searchQuery: string;
    categories: string[];
  };
}

export const initialState: ProductState = adapter.getInitialState({
  filtering: {
    searchQuery: undefined,
    categories: []
  }
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
      return {...state, filtering: {...state.filtering, searchQuery: action.searchQuery }};

    case ProductActionTypes.AddCategoryFilter: {
      const updatedCategories: string[] = state.filtering.categories.slice();
      updatedCategories.push(action.category);
      return {...state, filtering: {...state.filtering, categories: updatedCategories }};
    }

    case ProductActionTypes.RemoveCategoryFilter: {
      let updatedCategories: string[];
      updatedCategories = state.filtering.categories.filter(category => category !== action.category);
      return {...state, filtering: {...state.filtering, categories: updatedCategories }};
    }

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
