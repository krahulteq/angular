import { Component } from '@angular/core';
import { SettingService } from '../../services/setting.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  providers: [DatePipe]
})
export class NewsComponent {

  bulletins: any;
  events: any;
  recentreview: any;
  title = 'library news';
  divVisible = true;
  formattedDate: any;
  recentreviewCaption: any;

  constructor(private settingService: SettingService, private datePipe: DatePipe) {
    this.settingService.bulletin().subscribe((response: any) => {
      this.bulletins = response.data;
      // console.log(response.data);
    });

    this.settingService.recentReviews().subscribe((response: any) => {
      this.recentreviewCaption = response.data.caption;
      this.recentreview = response.data.reviews;
      // console.log(response.data);
    });

    this.settingService.calendar().subscribe((response: any) => {
      const modifiedEvents = response.data.events;

      this.events = modifiedEvents.map((event: { name: any; date: any; }) => {

        const dateString = event.date;
        const date = new Date(dateString);

        this.formattedDate = this.datePipe.transform(date, 'yyyy-MM-dd');

        return { title: event.name, date: this.formattedDate };
      });

      // console.log(this.events);

      setTimeout(() => {
        this.divVisible = false;
      }, 1000);
    });
  }

}
