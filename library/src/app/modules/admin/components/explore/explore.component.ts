import { Component } from '@angular/core';
import { SettingService } from '../../services/setting.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent {
  explores: any;
  constructor(private settingService: SettingService) {

    this.settingService.exploreSettings().subscribe((response: any) => {
      this.explores = response.data.buttons;
      // console.log(this.explores);
    });
  }

  title = 'explore';

  divVisible = true;

  ngOnInit() {
    setTimeout(() => {
      this.divVisible = false;
    }, 1000);
  }
}
