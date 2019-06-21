import { Action } from '@ngrx/store';
import { Product } from '../../models/product.model';
import { Update } from '@ngrx/entity';
import { ProductCart } from '../../models/product-cart.model';

export enum CartActionTypes {
  AddProductToCart = '[Cart] Add Product to Cart',
  RemoveProductFromCart = '[Cart] Remove Product from Cart',
  UpdateProductFromCart = '[Cart] Update Product from Cart'
}

export class AddProductToCartAction implements Action {
  readonly type = CartActionTypes.AddProductToCart;

  constructor(public product: Product) {
  }
}

export class RemoveProductFromCartAction implements Action {
  readonly type = CartActionTypes.RemoveProductFromCart;

  constructor(public product: Product) {
  }
}

export class UpdateProductFromCartAction implements Action {
  readonly type = CartActionTypes.UpdateProductFromCart;

  constructor(public update: Update<ProductCart>) {
  }
}

export type CartActions =
  AddProductToCartAction |
  RemoveProductFromCartAction |
  UpdateProductFromCartAction;
