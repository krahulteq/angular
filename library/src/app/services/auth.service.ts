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

  setUserType(userType: string): void {
    localStorage.setItem('userType', userType);
  }

  getUserType(): string | null {
    return localStorage.getItem('userType');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    location.reload();
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

  // logged in user profile
  loginProfile(access_token: any): Observable<any> {
    // Prepare the headers
    access_token = 'Bearer ' + access_token;
    const headers = new HttpHeaders({
      'authorization': access_token,
      'configuration': '*',
      'locationid': '32471',
      'tenant': 'pcs',
    });

    // Make the HTTP POST request
    return this.http.get<any>('https://api.library.site/v1/profile/me', { headers });
  }

  // logged in user library card
  libraryCard(access_token: any): Observable<any> {
    // Prepare the headers
    access_token = 'Bearer ' + access_token;
    const headers = new HttpHeaders({
      'App-Id': 'opac',
      'authorization': access_token,
      'configuration': '*',
      'locationid': '32471',
      'tenant': 'pcs',
    });
    // Make the HTTP POST request
    return this.http.get<any>('https://api.library.site/v1/profile/librarycard', { headers });
  }

  // logged in user Account
  myAccount(access_token: any): Observable<any> {
    // Prepare the headers
    access_token = 'Bearer ' + access_token;
    const headers = new HttpHeaders({
      'App-Id': 'opac',
      'authorization': access_token,
      'configuration': '*',
      'locationid': '32471',
      'tenant': 'pcs',
    });
    // Make the HTTP POST request
    return this.http.get<any>('https://api.library.site/v1/account/status?sortBy=author&order=asc', { headers });
  }

  // logged in history
  history(access_token: any): Observable<any> {
    // Prepare the headers
    access_token = 'Bearer ' + access_token;
    const headers = new HttpHeaders({
      'App-Id': 'opac',
      'authorization': access_token,
      'configuration': '*',
      'locationid': '32471',
      'tenant': 'pcs',
    });
    // Make the HTTP POST request
    return this.http.get<any>('https://api.library.site/v1/account/history?&sortBy=author&order=asc', { headers });
  }

  // update catalog settings
  editCatalogSettings(access_token: any, bulletinId: any, width: any): Observable<any> {

    const params = {
      bulletinId: bulletinId,
      width: width,
    };

    // Prepare the headers
    access_token = 'Bearer ' + access_token;
    const headers = new HttpHeaders({
      'App-Id': 'opac',
      'authorization': access_token,
      'configuration': '*',
      'locationid': '32471',
      'tenant': 'pcs',
      'content-type': 'application/json'
    });
    // Make the HTTP POST request
    return this.http.post<any>('https://api.library.site/v1/widget/settings/bulletin?id=231', params, { headers });
  }

}
