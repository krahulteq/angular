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

  // app-banner
  bannerTitle: any;

  // app-faq
  faqCaption: any;
  faq: any;

  // app-llh "location library hours"
  llh: any;


  constructor(private settingService: SettingService) { }

  ngOnInit() {
    this.settingService.getSettings().subscribe(response => {
      this.settings = response;
      this.bannerTitle = this.settings.data.settings.appearance.banner.main;
    });

    this.settingService.getSettingsWithContent().subscribe(response => {
      this.settingsWithContent = response;
      console.log(this.settingsWithContent);
      this.settingsWithContent.data.forEach((section: { code: any; settings: { caption: any; questions: any; days: any; }; }) => {
        switch (section.code) {
          case 'QA':
            // FAQ section
            this.faqCaption = section.settings.caption;
            break;
          case 'LL':
            // LLH "Location library hours" section
            this.llh = section.settings.days;
            break;
          default:
            break;
        }
      });
      // console.log(this.llh[0].caption);
    });
  }
}
function insertData() {
  throw new Error('Function not implemented.');
}

function addData() {
  throw new Error('Function not implemented.');
}

