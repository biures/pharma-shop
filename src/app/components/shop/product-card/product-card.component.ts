import { Component, Input } from '@angular/core';
import { Product } from '../../../models/product.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store';
import { AddProductToFavoritesAction, RemoveProductFromFavoritesAction } from '../../../store/favorites/favorite.actions';
import { AddProductToCartAction } from '../../../store/cart/cart.actions';

@Component({
  selector: 'pharma-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  isFav = false;

  @Input()
  public product: Product;

  toggleFav() {
    if (!this.isFav) {
      this.store.dispatch(new AddProductToFavoritesAction(this.product));
    } else {
      this.store.dispatch(new RemoveProductFromFavoritesAction(this.product));
    }
    this.isFav = !this.isFav;
  }

  addToCart() {
    this.store.dispatch(new AddProductToCartAction(this.product));
  }

  constructor(public store: Store<AppState>) {
  }
}
