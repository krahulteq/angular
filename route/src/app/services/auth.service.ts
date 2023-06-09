import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient) { }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  // login({ email }: any): Observable<any> {
  //   if (email === 'krahul@teqmavens.com') {
  //     this.setToken('abcdefghijklmnopqrstuvwxyz');
  //     return of({ name: 'Rahul Kumar', email: 'admin@gmail.com' });
  //   }
  //   return throwError(new Error('Failed to login'));
  // }

  private apiUrlLogin = 'https://auth.surpass.cloud/connect/token';
  // login({ client_id, client_secret, grant_type, username, password, scope }: any) {
  login() {
    const headers = new HttpHeaders({
      'Authority': 'auth.surpass.cloud',
      'Configuration': '*',
      'Sec-Fetch-Mode': 'cors',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Tenant': 'pcs',
    });

    const credentials = {
      // client_id: 'surpasscloudapp',
      // client_secret: 'c7f70adf-bab4-4717-ae3e-dc7c7071a445',
      // grant_type: 'password',
      username: '998848',
      password: '998848',
      // scope: 'offline_access'
    };

    return this.http.post(`${this.apiUrlLogin}`, credentials, { headers });
  }

}
