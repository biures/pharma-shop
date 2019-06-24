import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteTooltipComponent } from './favorite-tooltip.component';

describe('FavoriteTooltipComponent', () => {
  let component: FavoriteTooltipComponent;
  let fixture: ComponentFixture<FavoriteTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
