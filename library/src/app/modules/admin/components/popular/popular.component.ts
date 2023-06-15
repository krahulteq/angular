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

  constructor(private settingService: SettingService) {
    
    this.settingService.popularTitles().subscribe((response: any) => {
      this.facet = response.data.facets;
      this.resource = response.data.resources;
      this.count = response.data.count;
      setTimeout(() => {
        this.divVisible = false;
      }, 1000);
      // console.log(response.data);
    });
  }
}
