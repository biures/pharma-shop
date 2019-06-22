import * as fromProducts from './../product/product.reducer';
import { createSelector } from '@ngrx/store';
import { AppState } from '../index';
import { Characteristic } from '../../models/smodels/characteristic.model';

export const selectProductState = (state: AppState) => state.productsState;

export const getSearchQuery = (state: AppState) => state.productsState.filtering.searchQuery;

export const getSelectedCategories = (state: AppState) => state.productsState.filtering.categories;

export const getSelectedCharacteristics = (state: AppState) => state.productsState.filtering.characteristics;

export const selectAllProducts = createSelector(
  selectProductState,
  fromProducts.selectAll
);

// products
export const selectAllProductsBasedOnQuery = createSelector(
  [getSearchQuery, selectAllProducts],
  (searchQuery, allProducts) => {
    if (searchQuery === undefined || searchQuery === '') {
      return allProducts;
    } else {
      return allProducts.filter(product => (
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      ));
    }
  }
);

export const selectAllProductsBasedOnCategories = createSelector(
  [selectAllProductsBasedOnQuery, getSelectedCategories],
  (products, categories) => {
    if (categories === undefined || categories.length === 0) {
      return products;
    } else {
      let filteredProducts = [];
      categories.forEach(category => {
        filteredProducts = filteredProducts.concat(products.filter(product => product.category === category));
      });
      return filteredProducts;
    }
  }
);

export const selectAllProductsBasedOnCharacteristics = createSelector(
  [selectAllProductsBasedOnCategories, getSelectedCharacteristics],
  (products, characteristics) => {
    if (characteristics === undefined || characteristics.length === 0) {
      return products;
    } else {
      let filteredProducts = [];
      characteristics.forEach(characteristic => {
        filteredProducts = filteredProducts.concat(products.filter(product => {
          let condition = false;

          product.characteristics.forEach((productCharacteristic: Characteristic) => {
            if (compareCharacteristics(productCharacteristic, characteristic)) {
              condition = true;
            }
          });

          return condition;
        }));
      });

      return filteredProducts;
    }
  }
);

// categories
export const selectProductCategories = createSelector(
  selectAllProductsBasedOnQuery, products => {
    return [...new Set(products.map(product => product.category))];
  }
);

// characteristics
export const selectAllCharacteristics = createSelector(
  selectAllProductsBasedOnQuery,
  products => {
    const totalCharacteristicsSet = new Set<Characteristic>();

    products.forEach(product => {
      if (product.characteristics.length > 0) {
        product.characteristics.forEach(characteristic => {
          totalCharacteristicsSet.add(characteristic);
        });
      }
    });

    return totalCharacteristicsSet;
  }
);

export const selectDistinctCharacteristicKeys = createSelector(
  selectAllCharacteristics,
  characteristics => {
    const totalCharacteristicKeySet = new Set<string>();

    characteristics.forEach(characteristic => {
      totalCharacteristicKeySet.add(characteristic.key);
    });

    return totalCharacteristicKeySet;
  }
);

export const selectDistinctCharacteristics = createSelector(
  [selectAllCharacteristics, selectDistinctCharacteristicKeys],
  (characteristics, distinctKeys) => {
    const distinctCharacteristics: Set<Characteristic> = new Set<Characteristic>();

    distinctKeys.forEach(key => {
      distinctCharacteristics.add(Array.from(characteristics).filter(characteristic => characteristic.key === key)[0]);
    });

    return distinctCharacteristics;
  }
);

export function compareCharacteristics(a: Characteristic, b: Characteristic): boolean {
  return a.id === b.id &&
    a.key === b.key &&
    a.value === b.value;
}
