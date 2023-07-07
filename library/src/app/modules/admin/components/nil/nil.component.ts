import { Component } from '@angular/core';
import { SettingService } from '../../services/setting.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-nil',
  templateUrl: './nil.component.html',
  styleUrls: ['./nil.component.scss']
})
export class NilComponent {
  divVisible = true;

  title = 'new in library';
  downloadCSV = true;
  facet: any;
  resource: any;
  count: any;
  order: string = 'date';
  divVisibleResource: boolean = false;

  constructor(private route: ActivatedRoute, private settingService: SettingService) {

    this.settingService.newInLibrary(this.order).subscribe((response: any) => {
      this.facet = response.data.facets;
      this.resource = response.data.resources;
      this.count = response.data.count;
      setTimeout(() => {
        this.divVisible = false;
      }, 1000);
    });
  }

  addItem(newItem: string) {
    this.divVisibleResource = true;
    this.order = newItem;
    this.settingService.newInLibrary(this.order).subscribe((response: any) => {
      this.resource = response.data.resources;
      setTimeout(() => {
        this.divVisibleResource = false;
      }, 1000);
    });
  }

}
