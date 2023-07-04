import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-community-resources',
  templateUrl: './community-resources.component.html',
  styleUrls: ['./community-resources.component.scss']
})
export class CommunityResourcesComponent {
  @Input() community: any;
  @Input() manageView: any;
}
