import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string | string): string {
    if (typeof value === 'string') {
      if (value !== value.toUpperCase()) {
        return value.charAt(0).toUpperCase() + value.slice(1);
      } else {
        return value;
      }
    } else {
      return value;
    }
  }

}
