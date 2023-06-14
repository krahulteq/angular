import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {
  
  divVisible = true;
  
  ngOnInit() {
    setTimeout(() => {
      this.divVisible = false;
    }, 1000);
  }

}
