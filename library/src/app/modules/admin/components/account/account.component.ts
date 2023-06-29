import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  title = 'My Acoount';
  downloadCSV = false;
  divVisible = true;
  onLoan: any;
  holds: any;
  constructor(private auth: AuthService) {
    const access_token = this.auth.getToken();
    this.auth.myAccount(access_token).subscribe((response: any) => {
      setTimeout(() => {
        this.divVisible = false;
      }, 1000);
      // console.log(response.data);
      this.onLoan = response.data.onLoan;
      this.holds = response.data.holds;
    });
  }

}
