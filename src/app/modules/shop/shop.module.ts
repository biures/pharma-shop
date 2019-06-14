import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromProduct from '../../store/reducers/index';
import { ProductEffects } from '../../store/product/product.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('products', fromProduct.reducers),
    EffectsModule.forFeature([ProductEffects]),
  ]
})
export class ShopModule { }
