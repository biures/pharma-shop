import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ProductEffects } from './store/product/product.effects';
import { ShopModule } from './modules/shop/shop.module';
import { SharedModule } from './modules/shared/shared.module';
import { FlexModule } from '@angular/flex-layout';
import { ContactComponent } from './components/contact/contact.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { DetailsComponent } from './components/shop/details/details.component';
import { AppRoutingModule } from './modules/routing/app-routing.module';
import { MatCheckboxModule, MatExpansionModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutUsComponent,
    DeliveryComponent,
    DetailsComponent
  ],
  imports: [
    ShopModule,
    SharedModule,
    AppRoutingModule,
    FlexModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([ProductEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !environment.production}),
    MatExpansionModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
