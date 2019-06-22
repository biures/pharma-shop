import { Characteristic } from './smodels/characteristic.model';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  stock: number;
  description?: string;
  discount?: number;
  characteristics?: Array<Characteristic>;
}
