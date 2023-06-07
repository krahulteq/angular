import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {
  currentItem = 'Television';
  
  divVisible = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.divVisible = false;
    }, 1000);
  }


}
