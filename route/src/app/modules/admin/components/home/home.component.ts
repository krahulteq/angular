import { Component, Input, OnInit } from '@angular/core';
import { SettingService } from '../../services/setting.service';
import { EventInput } from '@fullcalendar/core';

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

  // app-calendar
  events: EventInput[] = [];


  constructor(private settingService: SettingService) { }

  ngOnInit() {
    this.settingService.getSettings().subscribe((response: any) => {
      this.settings = response;
      this.bannerTitle = this.settings.data.settings.appearance.banner.main;
    });

    this.settingService.getSettingsWithContent().subscribe((response: any) => {
      this.settingsWithContent = response;
      console.log(this.settingsWithContent);
      this.settingsWithContent.data.forEach((section: {
        content: any; code: any; settings: { caption: any; questions: any; days: any; content: any; };
      }) => {
        switch (section.code) {
          case 'QA':
            // FAQ section
            this.faqCaption = section.settings.caption;
            this.faq = section.settings.questions;
            break;
          case 'LL':
            // LLH "Location library hours" section
            this.llh = section.settings.days;
            break;
          case 'CA':
            // LLH "Location library hours" section
            // this.events = section.content.events;
            // let eventsArr = [];
            section.content.events.forEach( (element: { name: any; date: any; endDate: any;}) => {
              // if (element['library']) {
              //   color = "#ADD8E6";
              // } else {
              //   color = "#CBC3E3";
              // }
              // console.log(element.name);
              let ob = {
                title: element.name,
                start: element.date,
                end: element.endDate,
                // color: color
              };
              this.events.push(ob);
            });
            console.log("dddddddddddddddd");
            console.log(this.events);
            console.log("dddddddddddddddd");
            break;
          default:
            break;
        }
      });
      // console.log(this.events);
    });
  }
}
function insertData() {
  throw new Error('Function not implemented.');
}

function addData() {
  throw new Error('Function not implemented.');
}

