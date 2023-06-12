import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

const AUTH_API = 'https://auth.surpass.cloud/connect/token';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Tenant': 'pcs',
    'Configuration': '*',
  })
};


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
    location.reload();
    // this.router.navigate(['']);
  }

  login(username: string, password: string): Observable<any> {

    const params = new HttpParams()
      .set('client_id', 'surpasscloudapp')
      .set('client_secret', 'c7f70adf-bab4-4717-ae3e-dc7c7071a445')
      .set('grant_type', 'password')
      .set('username', username)
      .set('password', password)
      .set('scope', 'offline_access');

    // Prepare the headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'tenant': 'pcs',
      'configuration': '*',
    });

    // Make the HTTP POST request
    return this.http.post<any>('https://auth.surpass.cloud/connect/token', params.toString(), { headers });
  }

}
