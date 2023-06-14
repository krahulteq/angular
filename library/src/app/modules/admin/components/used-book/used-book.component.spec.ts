import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedBookComponent } from './used-book.component';

describe('UsedBookComponent', () => {
  let component: UsedBookComponent;
  let fixture: ComponentFixture<UsedBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsedBookComponent]
    });
    fixture = TestBed.createComponent(UsedBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
