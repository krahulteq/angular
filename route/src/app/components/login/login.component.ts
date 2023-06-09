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
    // email: new FormControl('', [Validators.required, Validators.email]),
    // password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    client_id: new FormControl('surpasscloudapp'),
    client_secret: new FormControl('c7f70adf-bab4-4717-ae3e-dc7c7071a445'),
    grant_type: new FormControl('password'),
    username: new FormControl('998848'),
    password: new FormControl('998848'),
    scope: new FormControl('offline_access')
  });

  // get email() {
  //   return this.loginForm.get('email');
  // }

  // get password() {
  //   return this.loginForm.get('password');
  // }

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
    // if (this.loginForm.valid) {

    //   this.auth.login(this.loginForm.value).subscribe((result: any) => {
    //     console.log(result);
    //     // this.router.navigate(['/admin']);
    //   },
    //     (err: Error) => {
    //       alert(err.message);
    //     }
    //   );
    // }

    this.auth.login().subscribe((response: any) => {
      console.log(response);
    });

  }

  // login() {
  //   // Handle login logic here
  // }

}
