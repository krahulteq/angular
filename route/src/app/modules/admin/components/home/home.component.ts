import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { SettingService } from '../../services/setting.service';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import { DatePipe } from '@angular/common';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [DatePipe]
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
  // events: any[] = [];
  ob: any = {};
  formattedDate: any;
  events: any[] = [
    { title: 'event 1', date: '2023-06-01' },
    { title: 'event 3', date: '2023-06-01' },
    { title: 'event 2', date: '2023-06-02' }
  ];

  // ngOnChanges() {
  //   console.log('calendarEvents:', this.calendarEvents);
  // }

  // app-animal
  animalCaption: any;
  animal: any;

  // app-popular
  popularCaption: any;
  popular: any;

  // app-collection
  collectionCaption: any;
  collection: any;

  // new-collection
  newCaption: any;
  newin: any;

  // new-mystries
  mystry: any;
  mystryCaption: any;

  // new-catalog
  catalogCaption: any;
  catalogContent: any;

  // new-recent-review
  recentreviewCaption: any;
  recentreview: any;
  // changeDetector: any;

  constructor(private settingService: SettingService, private datePipe: DatePipe, private changeDetector: ChangeDetectorRef) {
    
    this.settingService.getSettings().subscribe((response: any) => {
      this.settings = response;
      this.bannerTitle = this.settings.data.settings.appearance.banner.main;
    });

    this.settingService.getSettingsWithContent().subscribe((response: any) => {
      this.settingsWithContent = response;
      // console.log(this.settingsWithContent);
      this.settingsWithContent.data.forEach((section: {
        content: any; code: any; id: any; settings: { caption: any; questions: any; days: any; content: any; };
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
            section.content.events.forEach((element: { name: any; date: any; }) => {
              const dateString = element.date;
              const date = new Date(dateString);

              this.formattedDate = this.datePipe.transform(date, 'yyyy-MM-dd');

              this.ob = {
                title: element.name,
                date: this.formattedDate,
              },
                this.events.push(this.ob);
              // this.events.push(ob);
              this.changeDetector.detectChanges();
            });

            // console.log(this.events);
            break;
          case 'RL':
            // Animal Reports section
            if (section.content.collectionType == 19) {
              this.animalCaption = section.content.caption;
              this.animal = section.content.resources;
            }
            // PVS E-Book Collection section
            if (section.content.collectionType == 33) {
              this.collectionCaption = section.content.caption;
              this.collection = section.content.resources;
            }
            // Mystries section
            if (section.content.collectionType == 199 && section.content.count == 5) {
              this.mystryCaption = section.content.caption;
              this.mystry = section.content.resources;
            }
            break;
          case 'PT':
            // Popular Titles section
            if (section.content.collectionType == 'P' && section.content.count == 5) {
              this.popularCaption = section.content.caption;
              this.popular = section.content.resources;
            }
            break;
          case 'NW':
            // New in Library section
            if (section.content.collectionType == 'N' && section.content.count == 3) {
              this.newCaption = section.content.caption;
              this.newin = section.content.resources;
            }
            break;
          case 'BU':
            // Catalog Access section
            if (section.content.id == 3) {
              this.catalogCaption = section.content.caption
              this.catalogContent = section.content.content
            }
            break;
          case 'RV':
            // Recent Reviews section
            if (section.id == 232) {
              this.recentreviewCaption = section.content.caption
              this.recentreview = section.content.reviews
            }
            break;
          default:
            break;
        }
      });
      // console.log(this.recentreview);
    });
  }

}

function addEvents() {
  throw new Error('Function not implemented.');
}
