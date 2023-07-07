import { Component } from '@angular/core';
import { SettingService } from '../../services/setting.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent {
  divVisible = true;

  title = 'popular titles';
  downloadCSV = true;
  resource: any;
  facet: any;
  count: any;
  order: string = 'date';
  divVisibleResource: boolean = false;

  constructor(private settingService: SettingService) {

    this.settingService.popularTitles(this.order).subscribe((response: any) => {
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
    this.settingService.popularTitles(this.order).subscribe((response: any) => {
      this.resource = response.data.resources;
      setTimeout(() => {
        this.divVisibleResource = false;
      }, 1000);
    });
  }

}
