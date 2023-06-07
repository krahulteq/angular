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
  bannerTitle1: any;
  bannerTitle2: any;

  // app-faq
  faqCaption: any;
  faq: { q: string, a: string }[] = [];


  constructor(private settingService: SettingService) { }

  ngOnInit() {
    this.settingService.getSettings().subscribe(response => {
      this.settings = response;
      // console.log(this.settings);
      this.bannerTitle1 = this.settings.data.settings.appearance.banner.main.line1;
      this.bannerTitle2 = this.settings.data.settings.appearance.banner.main.line2;
      // console.log(this.bannerTitle);
    });

    this.settingService.getSettingsWithContent().subscribe(response => {
      this.settingsWithContent = response;
      console.log(this.settingsWithContent);
      this.settingsWithContent.data.forEach((section: { code: any; settings: { caption: any; questions: any; }; }) => {
        switch (section.code) {
          case 'QA':
            this.faqCaption = section.settings.caption;
            section.settings.questions.forEach((qa: { q: any; a: any }) => {
                const q = qa.q;
                const a = qa.a;
                const entry = { q, a };
                this.faq.push(entry);
            });
            console.log(this.faq);
            break;

          default:
            break;
        }
      });
      this.faq = this.settingsWithContent.data;
    });
  }
}
function insertData() {
  throw new Error('Function not implemented.');
}

function addData() {
  throw new Error('Function not implemented.');
}

