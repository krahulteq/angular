import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAlternateComponent } from './header-alternate.component';

describe('HeaderAlternateComponent', () => {
  let component: HeaderAlternateComponent;
  let fixture: ComponentFixture<HeaderAlternateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderAlternateComponent]
    });
    fixture = TestBed.createComponent(HeaderAlternateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
