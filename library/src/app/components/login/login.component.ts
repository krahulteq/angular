import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  faLock = faLock;

  loginForm: any = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  get username() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  constructor(private authService: AuthService, private router: Router) { }
  divVisible = true;
  errorMessage = '';

  ngOnInit(): void {
    setTimeout(() => {
      this.divVisible = false;
    }, 1000);

    if (this.authService.isLoggedIn()) {
      this.router.navigate(['admin']);
    }
  }

  onSubmit(): void {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    this.divVisible = true;
    this.authService.login(username, password).subscribe({
      next: data => {
        // console.log(data);
        this.authService.setToken(data.access_token)
        this.router.navigate(['admin/home']);

        // location.reload();
      },
      error: err => {
        this.errorMessage = err.error.message;
      }
    });
  }
}
