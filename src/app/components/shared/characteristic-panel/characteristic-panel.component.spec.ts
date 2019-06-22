import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacteristicPanelComponent } from './characteristic-panel.component';

describe('CharacteristicPanelComponent', () => {
  let component: CharacteristicPanelComponent;
  let fixture: ComponentFixture<CharacteristicPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacteristicPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacteristicPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
