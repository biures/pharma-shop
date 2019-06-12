import { Component, OnInit } from '@angular/core';
import { AppState } from '../../store/reducers';
import { Store } from '@ngrx/store';
import { selectProductCategories } from '../../store/product/product.selectors';
import { AddCategoryFilter, RemoveCategoryFilter } from '../../store/product/product.actions';

@Component({
  selector: 'pharma-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  productCategories: Array<string>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.select(selectProductCategories).subscribe(categories => this.productCategories = categories);
  }

  checkCategory(event, category: string) {
    if (event.checked === true) {
      this.store.dispatch(new AddCategoryFilter(category));
    } else {
      this.store.dispatch(new RemoveCategoryFilter(category));
    }
  }

}
