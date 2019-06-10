import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatToolbarModule
} from '@angular/material';
import { FlexModule } from '@angular/flex-layout';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ProductEffects } from './store/product/product.effects';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    ProductCardComponent,
    ProductListComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    FlexModule,
    MatCardModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([ProductEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !environment.production}),
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
