import { Component } from '@angular/core';
import { SettingService } from '../../services/setting.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent {
  explores: any;
  divVisible = true;
  title = 'explore';

  constructor(private settingService: SettingService) {
    this.settingService.exploreSettings().subscribe((response: any) => {
      this.explores = response.data.buttons;
      // console.log(response.data);
      setTimeout(() => {
        this.divVisible = false;
      }, 1000);
    });
  }
}
