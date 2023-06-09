import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  title = 'my list';
  downloadCSV = true;
  divVisible = true;
  noResultsFound = true;
  constructor() {
    setTimeout(() => {
      this.divVisible = false;
    }, 1000);
  }
}
