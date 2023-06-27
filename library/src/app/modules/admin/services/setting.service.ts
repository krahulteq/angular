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

  // for basic search suggestions
  searchSuggestionService(term: string, searchby: string) {
    const headers = new HttpHeaders({
      'App-Id': 'opac',
      'Configuration': '*',
      'Selectedlibrary': '32471',
      'Tenant': 'pcs',
    });

    return this.http.get(`${'https://api.library.site/v1/resource/suggestion?searchby=' + searchby + '&term=' + term}`, { headers });
  }

  // for basic searching
  searchfcnService(term: string, searchin: string, resourceId: string) {
    const headers = new HttpHeaders({
      'App-Id': 'opac',
      'Configuration': '*',
      'Selectedlibrary': '32471',
      'Tenant': 'pcs',
    });
    if (resourceId === '') {
      return this.http.get(`${'https://api.library.site/v1/search/base?size=20&term=' + term + '&in=' + searchin + '&exact=false&order=date'}`, { headers });
    } else {
      return this.http.get(`${'https://api.library.site/v1/search/fieldValue?id=' + resourceId + '&size=20&order=date'}`, { headers });
    }
  }

  // accelerated Reader search
  acceleratedSearchService(levelmin: string, levelmax: string, pointmin: string, pointmax: string, intrestlevel: string) {
    const headers = new HttpHeaders({
      'App-Id': 'opac',
      'Configuration': '*',
      'Selectedlibrary': '32471',
      'Tenant': 'pcs',
    });
    return this.http.get(`${'https://api.library.site/v1/search/ar?size=20&levelmin=' + levelmin + '&levelmax=' + levelmax + '&pointmin=' + pointmin + '&pointmax=' + pointmax + '&int=' + intrestlevel + '&order=date'}`, { headers });
  }

  // barcode search
  barcodeSearchService(start: string, end: string) {
    const headers = new HttpHeaders({
      'App-Id': 'opac',
      'Configuration': '*',
      'Selectedlibrary': '32471',
      'Tenant': 'pcs',
    });
    return this.http.get(`${'https://api.library.site/v1/search/barcode?start=' + start + '&end=' + end + '&size=20&exact=false&order=date'}`, { headers });
  }

  // call search
  callSearchService(start: string, end: string) {
    const headers = new HttpHeaders({
      'App-Id': 'opac',
      'Configuration': '*',
      'Selectedlibrary': '32471',
      'Tenant': 'pcs',
    });
    return this.http.get(`${'https://api.library.site/v1/search/call?start=' + start + '&end=' + end + '&size=20&exact=false&order=date'}`, { headers });
  }

  // fountas & pinnell search
  fountasSearchService(levelmin: string, levelmax: string) {
    const headers = new HttpHeaders({
      'App-Id': 'opac',
      'Configuration': '*',
      'Selectedlibrary': '32471',
      'Tenant': 'pcs',
    });
    return this.http.get(`${'https://api.library.site/v1/search/fp?levelmin=' + levelmin + '&levelmax=' + levelmax + '&size=20&exact=false&order=date'}`, { headers });
  }

  // lexile search
  lexileSearchService(levelmin: string, levelmax: string, code: string, patronType: string) {
    const headers = new HttpHeaders({
      'App-Id': 'opac',
      'Configuration': '*',
      'Selectedlibrary': '32471',
      'Tenant': 'pcs',
    });
    return this.http.get(`${'https://api.library.site/v1/search/lexile?size=20&levelmin=' + levelmin + '&levelmax=' + levelmax + '&code=' + code + '&patronType=' + patronType + '&order=date'}`, { headers });
  }

  // marc search
  marcSearchService(keyword: string, searchin: string, exact: string) {
    const headers = new HttpHeaders({
      'App-Id': 'opac',
      'Configuration': '*',
      'Selectedlibrary': '32471',
      'Tenant': 'pcs',
    });
    return this.http.get(`${'https://api.library.site/v1/search/marc?size=20&term=' + keyword + '&in=' + searchin + '&exact=' + exact + '&order=date'}`, { headers });
  }

  // reading counts search
  readingSearchService(levelmin: string, levelmax: string, pointmin: string, pointmax: string, exact: string) {
    const headers = new HttpHeaders({
      'App-Id': 'opac',
      'Configuration': '*',
      'Selectedlibrary': '32471',
      'Tenant': 'pcs',
    });
    return this.http.get(`${'https://api.library.site/v1/search/rc?levelmin=' + levelmin + '&levelmax=' + levelmax + '&pointmin=' + pointmin + '&pointmax=' + pointmax + '&size=20&exact=' + exact + '&order=date'}`, { headers });
  }

  // boolean search
  booleanSearchService(parameters: any) {
    const headers = new HttpHeaders({
      'App-Id': 'opac',
      'Configuration': '*',
      'Selectedlibrary': '32471',
      'Tenant': 'pcs',
    });
    return this.http.get(`${'https://api.library.site/v1/search/bool?size=20&&' + parameters + '&order=date'}`, { headers });
  }

}
