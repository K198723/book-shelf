import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntireBookListComponent } from './entire-book-list.component';

describe('EntireBookListComponent', () => {
  let component: EntireBookListComponent;
  let fixture: ComponentFixture<EntireBookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntireBookListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntireBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
