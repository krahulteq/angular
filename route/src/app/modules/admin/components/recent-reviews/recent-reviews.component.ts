import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recent-reviews',
  templateUrl: './recent-reviews.component.html',
  styleUrls: ['./recent-reviews.component.scss']
})
export class RecentReviewsComponent {
  @Input() recentreviews: any;
  @Input() recentreviewCaption: any;
}
