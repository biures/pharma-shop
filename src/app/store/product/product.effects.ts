import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoadProducts, LoadProductsFail, LoadProductsSuccess, ProductActionTypes } from './product.actions';
import { map } from 'rxjs/operators';
import { mockedProducts } from '../../util/product-list.mock';

@Injectable()
export class ProductEffects {

  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType<LoadProducts>(ProductActionTypes.LoadProducts),
    map(() => {
      const products = mockedProducts;
      return new LoadProductsSuccess(products);
    })
  );

  @Effect({dispatch: false})
  loadProductsSuccess$ = this.actions$.pipe(
    ofType<LoadProductsSuccess>(ProductActionTypes.LoadProductsSuccess),
    map(() => {
      console.log('Products loaded successfully');
    })
  );

  @Effect({dispatch: false})
  loadProductsFail$ = this.actions$.pipe(
    ofType<LoadProductsFail>(ProductActionTypes.LoadProductsFail),
    map(() => {
      console.log('Products loaded fail');
    })
  );

  constructor(private actions$: Actions) {}

}
