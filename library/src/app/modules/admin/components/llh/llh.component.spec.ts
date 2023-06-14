import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlhComponent } from './llh.component';

describe('LlhComponent', () => {
  let component: LlhComponent;
  let fixture: ComponentFixture<LlhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LlhComponent]
    });
    fixture = TestBed.createComponent(LlhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
