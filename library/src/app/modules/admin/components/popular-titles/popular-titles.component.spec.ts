import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularTitlesComponent } from './popular-titles.component';

describe('PopularTitlesComponent', () => {
  let component: PopularTitlesComponent;
  let fixture: ComponentFixture<PopularTitlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopularTitlesComponent]
    });
    fixture = TestBed.createComponent(PopularTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
