import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Product } from '../../models/product.model';
import { ProductActions, ProductActionTypes } from './product.actions';
import { Characteristic } from '../../models/smodels/characteristic.model';

export const adapter: EntityAdapter<Product> =
  createEntityAdapter<Product>();

export interface ProductState extends EntityState<Product> {
  filtering: {
    searchQuery: string;
    categories: string[];
    characteristics: Characteristic[];
  };
}

export const initialState: ProductState = adapter.getInitialState({
  filtering: {
    searchQuery: undefined,
    categories: [],
    characteristics: []
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
      return {...state, filtering: {...state.filtering, searchQuery: action.searchQuery}};

    case ProductActionTypes.AddCategoryFilter: {
      const updatedCategories: string[] = state.filtering.categories.slice();
      updatedCategories.push(action.category);
      return {...state, filtering: {...state.filtering, categories: updatedCategories}};
    }

    case ProductActionTypes.RemoveCategoryFilter: {
      let updatedCategories: string[];
      updatedCategories = state.filtering.categories.filter(category => category !== action.category);
      return {...state, filtering: {...state.filtering, categories: updatedCategories}};
    }

    case ProductActionTypes.AddCharacteristicFilter: {
      const updatedCharacteristics: Characteristic[] = state.filtering.characteristics.slice();
      updatedCharacteristics.push(action.characteristic);
      return {...state, filtering: {...state.filtering, characteristics: updatedCharacteristics}};
    }

    case ProductActionTypes.RemoveCharacteristicFilter: {
      let updatedCharacteristics: Characteristic[];
      updatedCharacteristics = state.filtering.characteristics.filter(characteristic => {
        return (characteristic.id !== action.characteristic.id) &&
          (characteristic.key !== action.characteristic.key) &&
          (characteristic.value !== action.characteristic.value);
      });
      return {...state, filtering: {...state.filtering, characteristics: updatedCharacteristics}};
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
