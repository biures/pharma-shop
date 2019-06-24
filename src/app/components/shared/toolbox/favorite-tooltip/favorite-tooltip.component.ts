import { Component, Input } from '@angular/core';

@Component({
  selector: 'pharma-favorite-tooltip',
  templateUrl: './favorite-tooltip.component.html',
  styleUrls: ['./favorite-tooltip.component.css']
})
export class FavoriteTooltipComponent {

  @Input() text = '';

}
