import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SettingService {
  
  constructor(private http: HttpClient) { }
  
  private apiUrlSettings = 'https://api.library.site/v1/setting'; // Replace with your API endpoint
  getSettings() {
    const headers = new HttpHeaders({
      'App-Id': 'opac',
      'Authorization': 'Bearer',
      'Configuration': '*',
      'Selectedlibrary': '',
      'Tenant': 'pcs',
    });
    
    return this.http.get(`${this.apiUrlSettings}`, { headers });
  }

  private apiUrlSettingsWithContent = 'https://api.library.site/v1/widget/settingswithcontent'; // Replace with your API endpoint
  getSettingsWithContent() {
    const headers = new HttpHeaders({
      'App-Id': 'opac',
      'Authorization': '',
      'Configuration': '*',
      'Selectedlibrary': 32471,
      'Tenant': 'pcs',
    });

    return this.http.get(`${this.apiUrlSettingsWithContent}`, { headers });
  }
}
