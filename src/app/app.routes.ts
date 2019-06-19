import { ShopComponent } from './components/shop/shop.component';
import { ContactComponent } from './components/contact/contact.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DetailsComponent } from './components/shop/details/details.component';


export const appRoutes = [
  {
    path: '', redirectTo: 'shop', pathMatch: 'full'
  },
  {
    path: 'shop', component: ShopComponent
  },
  {
    path: 'shop/details/:id', component: DetailsComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'devliery', component: DeliveryComponent
  },
  {
    path: 'about', component: AboutUsComponent
  }
];
