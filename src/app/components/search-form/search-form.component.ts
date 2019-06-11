import { Component, OnInit } from '@angular/core';
import { AppState } from '../../store/reducers';
import { Store } from '@ngrx/store';
import { ChangeSearchQuery } from '../../store/product/product.actions';

@Component({
  selector: 'pharma-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  addSearchQuery(searchQuery: string) {
    this.store.dispatch(new ChangeSearchQuery(searchQuery));
  }
}
