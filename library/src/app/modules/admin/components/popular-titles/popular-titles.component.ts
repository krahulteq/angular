import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popular-titles',
  templateUrl: './popular-titles.component.html',
  styleUrls: ['./popular-titles.component.scss']
})
export class PopularTitlesComponent {
  @Input() populars: any;
  @Input() popularCaption: any;
}