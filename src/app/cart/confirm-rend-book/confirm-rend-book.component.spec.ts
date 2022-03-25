import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmRendBookComponent } from './confirm-rend-book.component';

describe('ConfirmRendBookComponent', () => {
  let component: ConfirmRendBookComponent;
  let fixture: ComponentFixture<ConfirmRendBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmRendBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmRendBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
