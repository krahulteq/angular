import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  title = 'history';
  downloadCSV = true;
  divVisible = true;
  constructor() {
    setTimeout(() => {
      this.divVisible = false;
    }, 1000);
  }
}
