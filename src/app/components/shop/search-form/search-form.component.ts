import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../store';
import { Store } from '@ngrx/store';
import { ChangeSearchQuery } from '../../../store/product/product.actions';
import { selectAllProducts } from '../../../store/product/product.selectors';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'pharma-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  searchControl = new FormControl();
  allProductNames: Array<string>;
  filteredOptions: Observable<string[]>

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.filteredOptions = this.searchControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

    this.store.select(selectAllProducts)
      .pipe(
        map(products => {
          return products.map(product => product.name);
        })
      ).subscribe(productNames => {
      this.allProductNames = productNames;
    });

  }

  addSearchQuery(searchQuery: string) {
    this.store.dispatch(new ChangeSearchQuery(searchQuery));
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allProductNames.filter(option => option.toLowerCase().includes(filterValue));
  }
}
