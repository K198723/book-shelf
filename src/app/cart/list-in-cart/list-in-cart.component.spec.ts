import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInCartComponent } from './list-in-cart.component';

describe('ListInCartComponent', () => {
  let component: ListInCartComponent;
  let fixture: ComponentFixture<ListInCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListInCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
