import { ShopComponent } from '../../components/shop/shop.component';

export const shopRoutes = [
  {
    path: '', redirectTo: 'overview', pathMatch: 'full'
  },
  {
    path: 'overview', component: ShopComponent
  }
];
