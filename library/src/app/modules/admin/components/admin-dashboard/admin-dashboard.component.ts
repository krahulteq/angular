import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {

  divVisible = true;
  loginBtnVisible = true;
  userProfile: any;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
    setTimeout(() => {
      this.divVisible = false;
    }, 1000);

    if (this.auth.isLoggedIn()) {
      this.loginBtnVisible = false;
      const access_token = this.auth.getToken();
      this.auth.loginProfile(access_token).subscribe((response: any) => {
        this.userProfile = response.data;
        // if (response.data.permission.opacAdmin) {
        //   this.auth.setUserType('admin');
        // }
      });
    }
  }

}
