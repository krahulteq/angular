import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nil-resources',
  templateUrl: './nil-resources.component.html',
  styleUrls: ['./nil-resources.component.scss']
})
export class NilResourcesComponent {
  @Input() resources: any;
  @Input() count: any;
  @Input() divVisibleResource: any;
  @Output() newItemEvent = new EventEmitter<string>();
  activeClassInitialy: string = 'active';

  addNewItem(value: string) {
    this.activeClassInitialy = '';
    this.newItemEvent.emit(value);
  }

  activeTab: string = 'tab1';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

}
