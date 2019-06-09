import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { mockedProducts } from '../../util/product-list.mock';

@Component({
  selector: 'pharma-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  public productList: Product[] = mockedProducts;

  constructor() {
  }

}
