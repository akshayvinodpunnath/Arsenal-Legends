import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLegendsComponent } from './list-legends.component';

describe('ListLegendsComponent', () => {
  let component: ListLegendsComponent;
  let fixture: ComponentFixture<ListLegendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLegendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLegendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
