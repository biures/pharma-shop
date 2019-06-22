import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pharma-availability-badge',
  templateUrl: './availability-badge.component.html',
  styleUrls: ['./availability-badge.component.scss']
})
export class AvailabilityBadgeComponent implements OnInit {

  badgeMessage: string;

  @Input()
  stockCount: number;

  constructor() { }

  ngOnInit() {
    if (this.stockCount === 0) {
      this.badgeMessage = 'Indisponibil';
    } else if (this.stockCount > 0 && this.stockCount < 5) {
      this.badgeMessage = 'Limitat';
    } else if (this.stockCount >= 5) {
      this.badgeMessage = 'Disponibil';
    }
  }

}
