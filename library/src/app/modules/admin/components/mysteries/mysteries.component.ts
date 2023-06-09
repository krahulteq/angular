import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mysteries',
  templateUrl: './mysteries.component.html',
  styleUrls: ['./mysteries.component.scss']
})
export class MysteriesComponent {
  @Input() mysteries: any;
  @Input() mystryCaption: any;
  @Input() manageView: any;
}
