import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { AppState } from '../../store/reducers';
import { Store } from '@ngrx/store';
import { selectAllProducts } from '../../store/product/product.selectors';

@Component({
  selector: 'pharma-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public productList: Product[] = [];

  ngOnInit() {
    this.store.select(selectAllProducts).subscribe(allProducts => {
      this.productList = allProducts;
    });
  }

  constructor(private store: Store<AppState>) {
  }

}
