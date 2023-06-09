import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent {
  @Input()
  rating!: number;
  stars!: number[];
  rstars!: number[];

  ngOnInit() {
    this.stars = Array(this.rating).fill(0);
    this.rstars = Array(5-this.rating).fill(0);
  }
}
