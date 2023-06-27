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
  resourceId: any;
  type: any;
  levelmin: any;
  levelmax: any;
  pointmin: any;
  pointmax: any;
  intrestlevel: any;
  start: any;
  end: any;
  code: any;
  patronType: any;
  exact: any;
  parameters: any;


  constructor(private route: ActivatedRoute, private settingService: SettingService) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.type = params['type'];

      // basic search
      if (this.type === 'Basic' || this.type === 'basic') {
        this.keyword = params['keyword'];
        this.searchin = params['searchin'];
        this.resourceId = params['resource'];
        if (!this.resourceId) {
          this.resourceId = ''
        }
        this.divVisible = true;
        this.totalCount = false;
        this.noResultsFound = false;
        this.settingService.searchfcnService(this.keyword, this.searchin, this.resourceId).subscribe((response: any) => {
          setTimeout(() => {
            this.divVisible = false;
          }, 1000);
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

      // Accelerated Reader search
      if (this.type === 'AcceleratedReader') {
        this.divVisible = true;
        this.totalCount = false;
        this.noResultsFound = false;
        this.levelmin = params['levelmin'];
        this.levelmax = params['levelmax'];
        this.pointmin = params['pointmin'];
        this.pointmax = params['pointmax'];
        this.intrestlevel = params['intrestlevel'];
        this.keyword = 'Accelerated Reader: Levels ' + this.levelmin + ' - ' + this.levelmax + ', Points ' + this.pointmin + ' - ' + this.pointmax;
        this.settingService.acceleratedSearchService(this.levelmin, this.levelmax, this.pointmin, this.pointmax, this.intrestlevel).subscribe((response: any) => {
          setTimeout(() => {
            this.divVisible = false;
          }, 1000);
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

      // Barcode search
      if (this.type === 'Barcode') {
        this.divVisible = true;
        this.totalCount = false;
        this.noResultsFound = false;
        this.start = params['start'];
        this.end = params['end'];
        this.keyword = this.start + ' To ' + this.end;
        this.settingService.barcodeSearchService(this.start, this.end).subscribe((response: any) => {
          setTimeout(() => {
            this.divVisible = false;
          }, 1000);
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

      // Call search
      if (this.type === 'Call') {
        this.divVisible = true;
        this.totalCount = false;
        this.noResultsFound = false;
        this.start = params['start'];
        this.end = params['end'];
        this.keyword = this.start + ' To ' + this.end;
        this.settingService.callSearchService(this.start, this.end).subscribe((response: any) => {
          setTimeout(() => {
            this.divVisible = false;
          }, 1000);
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

      // Fountas & Pinnell search
      if (this.type === 'Fountas') {
        this.divVisible = true;
        this.totalCount = false;
        this.noResultsFound = false;
        this.levelmin = params['levelmin'];
        this.levelmax = params['levelmax'];
        this.keyword = 'Fountas & Pinnell: Levels ' + this.levelmin + ' - ' + this.levelmax;
        this.settingService.fountasSearchService(this.levelmin, this.levelmax).subscribe((response: any) => {
          setTimeout(() => {
            this.divVisible = false;
          }, 1000);
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

      // Lexile search
      if (this.type === 'Lexile') {
        this.divVisible = true;
        this.totalCount = false;
        this.noResultsFound = false;
        this.levelmin = params['levelmin'];
        this.levelmax = params['levelmax'];
        this.code = params['code'];
        this.patronType = params['patronType'];
        this.keyword = 'Lexile: Levels ' + this.levelmin + ' - ' + this.levelmax;
        this.settingService.lexileSearchService(this.levelmin, this.levelmax, this.code, this.patronType).subscribe((response: any) => {
          setTimeout(() => {
            this.divVisible = false;
          }, 1000);
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

      // MARC search
      if (this.type === 'Marc') {
        this.divVisible = true;
        this.totalCount = false;
        this.noResultsFound = false;
        this.keyword = params['keyword'];
        this.searchin = params['searchin'];
        this.exact = params['exact'];
        this.settingService.marcSearchService(this.keyword, this.searchin, this.exact).subscribe((response: any) => {
          setTimeout(() => {
            this.divVisible = false;
          }, 1000);
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

      // Reading Counts search
      if (this.type === 'ReadingCounts') {
        this.divVisible = true;
        this.totalCount = false;
        this.noResultsFound = false;
        this.levelmin = params['levelmin'];
        this.levelmax = params['levelmax'];
        this.pointmin = params['pointmin'];
        this.pointmax = params['pointmax'];
        this.exact = params['exact'];
        this.keyword = 'Reading Counts: Levels ' + this.levelmin + ' - ' + this.levelmax + ', Points ' + this.pointmin + ' - ' + this.pointmax;
        this.settingService.readingSearchService(this.levelmin, this.levelmax, this.pointmin, this.pointmax, this.exact).subscribe((response: any) => {
          setTimeout(() => {
            this.divVisible = false;
          }, 1000);
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

      // Boolean search
      if (this.type === 'Boolean') {
        this.divVisible = true;
        this.totalCount = false;
        this.noResultsFound = false;
        this.parameters = params['parameters'];
        
        this.keyword = "Boolean";
        // console.log(this.parameters);
        this.settingService.booleanSearchService(this.parameters).subscribe((response: any) => {
          setTimeout(() => {
            this.divVisible = false;
          }, 1000);
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
    });
  }

  loadSearch(keyword: string, searchin: string, resourceId: string) {
    this.divVisible = true;
    this.totalCount = false;
    this.noResultsFound = false;
    this.settingService.searchfcnService(keyword, searchin, resourceId).subscribe((response: any) => {
      setTimeout(() => {
        this.divVisible = false;
      }, 1000);
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
