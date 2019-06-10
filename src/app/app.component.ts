import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/reducers';
import { LoadProducts } from './store/product/product.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pharma-shop';

  ngOnInit(): void {
    this.store.dispatch(new LoadProducts());
  }

  constructor(private store: Store<AppState>) {
  }
}
