import { Component, OnInit } from '@angular/core';
import { LoadProducts } from '../../store/product/product.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';

@Component({
  selector: 'pharma-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  ngOnInit(): void {
    this.store.dispatch(new LoadProducts());
  }

  constructor(private store: Store<AppState>) {
  }
}
