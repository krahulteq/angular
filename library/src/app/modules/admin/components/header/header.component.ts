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
  private inactivityTimeout = 3600; // 60x60 seconds of inactivity
  private timer: any;

  homeNavbar = true;
  navbarSearch = true;
  userProfile: any;

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
      const access_token = this.auth.getToken();
      this.auth.loginProfile(access_token).subscribe((response: any) => {
        // console.log(response);
        this.userProfile = response.data; 
      });
    }
  }

  private getComponentBasedOnUrl(url: string): any {
    if (url.includes('admin/home')) {
      return true;
    } else {
      return false;
    }
  }

  getLibraryCard(): void {
    const access_token = this.auth.getToken();
    this.auth.libraryCard(access_token).subscribe((response: any) => {
      // console.log(response);
      this.userProfile = response.data; 
    });
  }

  logout(): void {
    this.auth.logout();
  }
}
