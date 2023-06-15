import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nil-resources',
  templateUrl: './nil-resources.component.html',
  styleUrls: ['./nil-resources.component.scss']
})
export class NilResourcesComponent {
  @Input() resources: any;
  @Input() count: any;
}
