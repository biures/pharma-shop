import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { ProductCart } from '../../models/product-cart.model';
import {
  AddProductToCartAction,
  CartActions,
  CartActionTypes,
  RemoveProductFromCartAction,
  UpdateProductFromCartAction
} from './cart.actions';

export const adapter: EntityAdapter<ProductCart> =
  createEntityAdapter<ProductCart>();

export interface CartState extends EntityState<ProductCart> {
}

export const initialState: CartState = adapter.getInitialState();

export function CartReducers(state = initialState, action: CartActions): CartState {
  switch (action.type) {

    case CartActionTypes.AddProductToCart:
      const product = (action as AddProductToCartAction).product;
      const existingProduct = state.entities[product.id];

      if (existingProduct != null) {
        const update = {
          id: product.id,
          changes: {
            quantity: existingProduct.quantity + 1
          }
        };

        return adapter.updateOne(update, state);
      } else {
        return adapter.addOne({
          ...product,
          quantity: 1
        }, state);
      }

    case CartActionTypes.RemoveProductFromCart:
      return adapter.removeOne((action as RemoveProductFromCartAction).product.id, state);

    case CartActionTypes.UpdateProductFromCart:
      return adapter.updateOne((action as UpdateProductFromCartAction).update, state);

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
