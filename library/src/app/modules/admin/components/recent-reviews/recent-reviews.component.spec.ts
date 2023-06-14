import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentReviewsComponent } from './recent-reviews.component';

describe('RecentReviewsComponent', () => {
  let component: RecentReviewsComponent;
  let fixture: ComponentFixture<RecentReviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentReviewsComponent]
    });
    fixture = TestBed.createComponent(RecentReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
