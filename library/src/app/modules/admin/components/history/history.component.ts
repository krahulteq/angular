import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  title = 'history';
  downloadCSV = true;
  divVisible = true;
  records: any;
  constructor(private auth: AuthService) {
    const access_token = this.auth.getToken();
    this.auth.history(access_token).subscribe((response: any) => {
      setTimeout(() => {
        this.divVisible = false;
      }, 1000);
      // console.log(response.data);
      this.records = response.data.records;
    });
  }
}
