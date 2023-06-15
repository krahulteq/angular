import { Component } from '@angular/core';
import { SettingService } from '../../services/setting.service';

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
  
  constructor(private settingService: SettingService) {
    
    this.settingService.newInLibrary().subscribe((response: any) => {
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
