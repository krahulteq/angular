import { Component, Input, OnInit } from '@angular/core';
import { SettingService } from '../../services/setting.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  settings: any;
  settingsWithContent: any;
  bannerTitle1: any;
  bannerTitle2: any;

  constructor(private settingService: SettingService) { }

  ngOnInit() {
    this.settingService.getSettings().subscribe(response => {
      this.settings = response;
      console.log(this.settings);
      this.bannerTitle1 = this.settings.data.settings.appearance.banner.main.line1;
      this.bannerTitle2 = this.settings.data.settings.appearance.banner.main.line2;
      // console.log(this.bannerTitle);
    });

    this.settingService.getSettingsWithContent().subscribe(response => {
      this.settingsWithContent = response;
      console.log(this.settingsWithContent);
    });
  }
}
