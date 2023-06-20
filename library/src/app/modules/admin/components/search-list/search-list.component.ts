import { Component, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SettingService } from '../../services/setting.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent {
  downloadCSV = true;
  divVisible = true;
  noResultsFound: boolean = false;
  totalCount: boolean = false;
  keyword: any;
  searchData: any;
  title: string = 'Search Results';
  facet: any;
  resource: any;
  count: any;
  searchin: any;


  constructor(private route: ActivatedRoute, private settingService: SettingService) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.keyword = params['keyword'];
      this.searchin = params['searchin'];
      this.loadSearch(this.keyword, this.searchin);
    });
  }

  loadSearch(keyword: string, searchin: string) {
    this.divVisible = true;
    this.totalCount = false;
    this.noResultsFound = false;
    this.settingService.searchfcnService(keyword, searchin).subscribe((response: any) => {
      setTimeout(() => {
        this.divVisible = false;
      }, 1000);
      console.log(response);
      // this.title = response.caption;
      if (response.totalCount > 0) {
        this.facet = response.facets;
        this.resource = response.resources;
        this.count = response.count;
      } else {
        this.totalCount = true;
        this.noResultsFound = true;
      }
    });
  }

}
