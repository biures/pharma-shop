import {Action} from '@ngrx/store';
import {Product} from '../../models/product.model';

export enum ProductActionTypes {
  LoadProducts = '[Product] Load Products',
  LoadProductsSuccess = '[Product] Load Products Success',
  LoadProductsFail = '[Product] Load Products Fail',
}

export class LoadProducts implements Action {
  readonly type = ProductActionTypes.LoadProducts;
}

export class LoadProductsSuccess implements Action {
  readonly type = ProductActionTypes.LoadProductsSuccess;

  constructor(public products: Array<Product>) {
  }
}

export class LoadProductsFail implements Action {
  readonly type = ProductActionTypes.LoadProductsFail;

  constructor(public errorMessage: string) {
  }
}

export type ProductActions =
  LoadProducts |
  LoadProductsSuccess |
  LoadProductsFail;
