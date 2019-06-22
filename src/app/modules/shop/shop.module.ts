import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromProduct from '../../store';
import { ProductEffects } from '../../store/product/product.effects';
import { ProductCardComponent } from '../../components/shop/product-card/product-card.component';
import { ProductListComponent } from '../../components/shop/product-list/product-list.component';
import { CategoriesComponent } from '../../components/shop/categories/categories.component';
import { ShopComponent } from '../../components/shop/shop.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDividerModule, MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatToolbarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { shopRoutes } from './shop.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductListComponent,
    CategoriesComponent,
    ShopComponent
  ],
  imports: [
    CommonModule,
    // StoreModule.forFeature('products', fromProduct.reducers),
    // EffectsModule.forFeature([ProductEffects]),
    MatInputModule,
    MatCheckboxModule,
    MatDividerModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexModule,
    RouterModule.forChild(shopRoutes),
    MatExpansionModule,
    SharedModule
  ],
  exports: [
    ProductCardComponent,
    ProductListComponent,
    CategoriesComponent,
    ShopComponent
  ]
})
export class ShopModule {
}
