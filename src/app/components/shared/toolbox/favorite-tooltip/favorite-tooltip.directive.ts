import { ComponentRef, Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { FavoriteTooltipComponent } from './favorite-tooltip.component';

@Directive({ selector: '[favoriteTooltip]' })
export class FavoriteTooltipDirective implements OnInit {

  private overlayRef: OverlayRef;

  @Input('favoriteTooltip') text = '';

  @HostListener('mouseenter')
  show() {
    const tooltipPortal = new ComponentPortal(FavoriteTooltipComponent);

    const tooltipRef: ComponentRef<FavoriteTooltipComponent> = this.overlayRef.attach(tooltipPortal);

    tooltipRef.instance.text = this.text;
  }

  @HostListener('mouseout')
  hide() {
    this.overlayRef.detach();
  }

  constructor(private overlay: Overlay,
              private elementRef: ElementRef,
              private overlayPositionBuilder: OverlayPositionBuilder) {}

  ngOnInit() {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([{
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top'
      }]);

    this.overlayRef = this.overlay.create({ positionStrategy });
  }
}
