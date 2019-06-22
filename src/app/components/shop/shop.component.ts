import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadProducts } from '../../store/product/product.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import { selectDistinctCharacteristics } from '../../store/product/product.selectors';
import { Characteristic } from '../../models/smodels/characteristic.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'pharma-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit, OnDestroy {

  distinctCharacteristics: Observable<Set<Characteristic>>;

  ngOnInit(): void {
    this.store.dispatch(new LoadProducts());
    /*this.store.select(selectAllCharacteristics).subscribe(characteristics => {
      this.allProductCharacteristics = characteristics;
    });
    this.store.select(selectDistinctCharacteristicKeys).subscribe(allCharacteristicKeys => {
      this.characteristicKeys = allCharacteristicKeys;
    });*/
    this.distinctCharacteristics = this.store.select(selectDistinctCharacteristics);
  }

  ngOnDestroy(): void {

  }

  constructor(private store: Store<AppState>) {
  }
}
