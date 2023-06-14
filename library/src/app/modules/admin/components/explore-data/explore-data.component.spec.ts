import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreDataComponent } from './explore-data.component';

describe('ExploreDataComponent', () => {
  let component: ExploreDataComponent;
  let fixture: ComponentFixture<ExploreDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExploreDataComponent]
    });
    fixture = TestBed.createComponent(ExploreDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
