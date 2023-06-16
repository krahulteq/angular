import { Component } from '@angular/core';
import { SettingService } from '../../services/setting.service';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent {
  divVisible = true;

  title = 'awards & honors';
  awardMenu: any;
  awardCategories: any;
  awardOtherYears: any;
  awardRecentYears: any;

  constructor(private settingService: SettingService) {
    this.settingService.awardMenu().subscribe((response: any) => {
      this.awardCategories = response.data.categories;
      this.awardOtherYears = response.data.otherYears;
      this.awardRecentYears = response.data.recentYears;
      setTimeout(() => {
        this.divVisible = false;
      }, 1000);
    });
  }
}
