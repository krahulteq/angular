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

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  constructor(private auth: AuthService, private router: Router) { }
  divVisible = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.divVisible = false;
    }, 1000);

    // if (this.auth.isLoggedIn()) {
    //   this.router.navigate(['admin']);
    // }
  }

  onSubmit(): void {
    // console.log(this.loginForm.value)
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          // console.log(result);
          this.router.navigate(['/admin']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }

}
