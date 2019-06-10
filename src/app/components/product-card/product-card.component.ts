import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';

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
    this.isFav = !this.isFav;
  }

  constructor() {
  }
}
