import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() item = '';
  constructor(private auth: AuthService) { }
  btnVisible = true;
  
  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.btnVisible = false;
    }
  }
  logout(): void {
    this.auth.logout(); 
  }
}
