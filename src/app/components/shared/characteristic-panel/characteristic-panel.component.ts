import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store';
import { selectAllCharacteristics, selectDisabledCharacteristics } from '../../../store/product/product.selectors';
import { AddCharacteristicFilter, RemoveCharacteristicFilter } from '../../../store/product/product.actions';
import { Characteristic } from '../../../models/smodels/characteristic.model';

@Component({
  selector: 'pharma-characteristic-panel',
  templateUrl: './characteristic-panel.component.html',
  styleUrls: ['./characteristic-panel.component.scss']
})
export class CharacteristicPanelComponent implements OnInit {
  productCharacteristicValues: Array<string | number> = [];
  productDistinctCharacteristicValues: Set<string | number>;
  disabledCharacteristics: Array<Characteristic> = [];

  @Input()
  characteristic: Characteristic;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.select(selectAllCharacteristics).subscribe(characteristics => {
      const characteristicsList = Array.from(characteristics);

      characteristicsList
        .filter(characteristic => {
          return this.characteristic.key.toLowerCase() === characteristic.key.toLowerCase();
        })
        .forEach(characteristic => {
          this.productCharacteristicValues = [...this.productCharacteristicValues, characteristic.value];
        });
    });

    this.productDistinctCharacteristicValues = new Set<string | number>(this.productCharacteristicValues.sort((a, b) => a < b ? -1 : 1));


    this.store.select(selectDisabledCharacteristics).subscribe(disabledCharacteristics => {
      this.disabledCharacteristics = disabledCharacteristics.filter(disabledChar => disabledChar.id === this.characteristic.id);
    });
  }

  checkCategory(event, category: string) {
    if (event.checked === true) {
      this.store.dispatch(new AddCharacteristicFilter({...this.characteristic, value: category} ));
    } else {
      this.store.dispatch(new RemoveCharacteristicFilter({...this.characteristic, value: category}));
    }
  }

  isCharacteristicDisabled(charValue: string | number) {
    let condition = false;

    this.disabledCharacteristics.forEach(disabledChar => {
      if (charValue === disabledChar.value) {
        condition = true;
      }
    });

    return condition;
  }
}
