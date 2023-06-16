import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private http: HttpClient) { }

  private apiUrlSettings = 'https://api.library.site/v1/setting';
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

  private apiUrlSettingsWithContent = 'https://api.library.site/v1/widget/settingswithcontent';
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

  // for explore
  private apiUrlExploreSettings = 'https://api.library.site/v1/explore/page/0?hidden=false';
  exploreSettings() {
    const headers = new HttpHeaders({
      'App-Id': 'opac',
      'Authorization': 'Bearer',
      'Configuration': '*',
      'Selectedlibrary': '',
      'Tenant': 'pcs',
    });

    return this.http.get(`${this.apiUrlExploreSettings}`, { headers });
  }

  // for new in libarary
  private apiUrlNewInLibrary = 'https://api.library.site/v1/resource/list/new?size=20&offset=0&order=date&descending=true&facets=';
  newInLibrary() {
    const headers = new HttpHeaders({
      'App-Id': 'opac',
      'Authorization': 'Bearer',
      'Configuration': '*',
      'Selectedlibrary': '',
      'Tenant': 'pcs',
    });

    return this.http.get(`${this.apiUrlNewInLibrary}`, { headers });
  }

  // for popular titles
  private apiUrlPopular = 'https://api.library.site/v1/resource/list/popular?size=20&offset=0&order=date&descending=true&facets=';
  popularTitles() {
    const headers = new HttpHeaders({
      'App-Id': 'opac',
      'Authorization': 'Bearer',
      'Configuration': '*',
      'Selectedlibrary': '',
      'Tenant': 'pcs',
    });

    return this.http.get(`${this.apiUrlPopular}`, { headers });
  }

  // for resource list
  private apiUrlResourceList = 'https://api.library.site/v1/resource/list';
  resourceList() {
    const headers = new HttpHeaders({
      'App-Id': 'opac',
      'Authorization': 'Bearer',
      'Configuration': '*',
      'Selectedlibrary': '',
      'Tenant': 'pcs',
    });

    return this.http.get(`${this.apiUrlResourceList}`, { headers });
  }

// *******************library news*****************
// for bulletin list
private apiUrlBulletin = 'https://api.library.site/v1/bulletin?size=10';
  bulletin() {
    const headers = new HttpHeaders({
      'App-Id': 'opac',
      'Authorization': 'Bearer',
      'Configuration': '*',
      'Selectedlibrary': '',
      'Tenant': 'pcs',
    });

    return this.http.get(`${this.apiUrlBulletin}`, { headers });
  }

  // for calendar evensts
  private apiUrlCalendar = 'https://api.library.site/v1/calendar?year=2023&month=6';
  calendar() {
    const headers = new HttpHeaders({
      'App-Id': 'opac',
      'Authorization': 'Bearer',
      'Configuration': '*',
      'Selectedlibrary': '',
      'Tenant': 'pcs',
    });
    
    return this.http.get(`${this.apiUrlCalendar}`, { headers });
  }

  // for recents reviews list
  private apiUrlRecentReviews = 'https://api.library.site/v1/review/recent?size=6';
  recentReviews() {
    const headers = new HttpHeaders({
      'App-Id': 'opac',
      'Authorization': 'Bearer',
      'Configuration': '*',
      'Selectedlibrary': '',
      'Tenant': 'pcs',
    });

    return this.http.get(`${this.apiUrlRecentReviews}`, { headers });
  }
  // *******************library news ends here*****************
  
  
    // for recents reviews list
    private apiUrlAwardMenu = 'https://api.library.site/v1/award/menu';
    awardMenu() {
      const headers = new HttpHeaders({
        'App-Id': 'opac',
        'Authorization': 'Bearer',
        'Configuration': '*',
        'Selectedlibrary': '',
        'Tenant': 'pcs',
      });
  
      return this.http.get(`${this.apiUrlAwardMenu}`, { headers });
    }

}
