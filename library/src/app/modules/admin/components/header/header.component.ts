import { Component, HostListener, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // @Input() currentNavbar: any;
  private inactivityTimeout = 60; // 60 seconds of inactivity
  private timer: any;

  homeNavbar = true;
  navbarSearch = true;

  constructor(private router: Router, private auth: AuthService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.homeNavbar = this.getComponentBasedOnUrl(event.url);
      }
    });
    this.startTimer();
  }

  btnVisible = true;

  @HostListener('document:mousemove')
  @HostListener('document:keypress')
  resetTimer() {
    clearTimeout(this.timer);
    this.startTimer();
  }

  startTimer() {
    if (this.auth.isLoggedIn()) {
      this.timer = setTimeout(() => {
        this.auth.logout();
      }, this.inactivityTimeout * 1000);
    }
  }

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.btnVisible = false;
    }
  }

  private getComponentBasedOnUrl(url: string): any {
    if (url.includes('admin/home')) {
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.auth.logout();
  }
}
