import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  title = 'My Acoount';
  downloadCSV = false;
  divVisible = true;
  constructor() {
    setTimeout(() => {
      this.divVisible = false;
    }, 1000);
  }
}
