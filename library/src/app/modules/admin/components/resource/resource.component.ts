import { Component } from '@angular/core';
import { SettingService } from '../../services/setting.service';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent {
  divVisible = true;

  title = 'resource lists';
  resourceLists: any;

  constructor(private settingService: SettingService) {
    
    this.settingService.resourceList().subscribe((response: any) => {
      this.resourceLists = response.data;
      setTimeout(() => {
        this.divVisible = false;
      }, 1000);
      // console.log(response.data);
    });
  }

}
