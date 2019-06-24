import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store';
import { getFavoriteCount } from '../../../store/favorites/favorite.selectors';
import { Observable } from 'rxjs';
import { getCartCount } from '../../../store/cart/cart.selectors';

@Component({
  selector: 'pharma-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent implements OnInit {

  favoritesCount: Observable<number>;

  cartCount: Observable<number>;

  constructor(public store: Store<AppState>) { }

  ngOnInit() {
    this.favoritesCount = this.store.select(getFavoriteCount);
    this.cartCount = this.store.select(getCartCount);
  }

}
