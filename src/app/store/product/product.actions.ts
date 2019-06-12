import {Action} from '@ngrx/store';
import {Product} from '../../models/product.model';

export enum ProductActionTypes {
  LoadProducts = '[Product] Load Products',
  LoadProductsSuccess = '[Product] Load Products Success',
  LoadProductsFail = '[Product] Load Products Fail',
  AddCategoryFilter = '[Product] Add Category Filter',
  RemoveCategoryFilter = '[Product] Remove Category Filter',
  ChangeSearchQuery = '[Product] Change search query'
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

export class ChangeSearchQuery implements Action {
  readonly type = ProductActionTypes.ChangeSearchQuery;

  constructor(public searchQuery: string) {
  }
}

export class AddCategoryFilter implements Action {
  readonly type = ProductActionTypes.AddCategoryFilter;

  constructor(public category: string){
  }
}

export class RemoveCategoryFilter implements Action {
  readonly type = ProductActionTypes.RemoveCategoryFilter;

  constructor(public category: string){
  }
}

export type ProductActions =
  LoadProducts |
  LoadProductsSuccess |
  LoadProductsFail |
  ChangeSearchQuery |
  AddCategoryFilter |
  RemoveCategoryFilter;
