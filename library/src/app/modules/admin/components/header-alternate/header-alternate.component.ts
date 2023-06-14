import { Component, HostListener, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header-alternate',
  templateUrl: './header-alternate.component.html',
  styleUrls: ['./header-alternate.component.scss']
})
export class HeaderAlternateComponent {
  @Input() item = '';
  private inactivityTimeout = 60; // 60 seconds of inactivity
  private timer: any;
  constructor(private auth: AuthService) {
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
  logout(): void {
    this.auth.logout();
  }
}
