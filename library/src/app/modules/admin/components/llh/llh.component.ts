import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-llh',
  templateUrl: './llh.component.html',
  styleUrls: ['./llh.component.scss']
})
export class LlhComponent {
@Input() llhs:any;
@Input() manageView: any;
}
