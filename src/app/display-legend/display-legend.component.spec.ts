import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayLegendComponent } from './display-legend.component';

describe('DisplayLegendComponent', () => {
  let component: DisplayLegendComponent;
  let fixture: ComponentFixture<DisplayLegendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayLegendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
