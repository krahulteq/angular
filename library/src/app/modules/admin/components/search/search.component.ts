import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SettingService } from '../../services/setting.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() navbarSearch: any;

  searchForm: FormGroup;
  acceleratedSearchForm: FormGroup;
  borderDanger: string = '';
  searchData: any;
  suggestions: any = [];
  selectedHeroValue: any;

  constructor(private fb: FormBuilder, private settingService: SettingService, private changeDetector: ChangeDetectorRef, private router: Router) {
    this.searchForm = this.fb.group({
      searchterm: ['', Validators.required],
      searchin: [''],
    });

    this.acceleratedSearchForm = this.fb.group({
      levelmin: ['', Validators.required],
      levelmax: ['', Validators.required],
      pointmin: ['', Validators.required],
      pointmax: ['', Validators.required],
      intrestlevel: [''],
    });
  }

  onSearchChanged(searchterm: string) {
    this.borderDanger = '';
    if (searchterm.length >= 3) {
      const searchin = this.searchForm.value.searchin;
      this.settingService.searchSuggestionService(searchterm, searchin).subscribe((response: any) => {
        this.suggestions = response.data;
      });
    } else {
      this.suggestions = [];
    }
  }

  onSubmit() {
    if (this.searchForm.valid) {
      this.suggestions = [];
      const term = this.searchForm.value.searchterm;
      const searchin = this.searchForm.value.searchin;
      this.borderDanger = '';
      this.router.navigate(['admin/searchlist'], { queryParams: { type: 'basic', keyword: term, searchin: searchin, exact: false } });
    } else {
      this.borderDanger = 'border-danger';
    }
  }

  advanceForm: any;
  onSubmitAdvanceSearch() {
    if (this.acceleratedSearchForm.valid) {
      console.log(this.acceleratedSearchForm.value);
      // this.suggestions = [];
      // const term = this.searchForm.value.searchterm;
      // const searchin = this.searchForm.value.searchin;
      this.borderDanger = '';
      // this.router.navigate(['admin/searchlist'], { queryParams: { type: 'basic', keyword: term, searchin: searchin, exact: false } });
    } else {
      this.borderDanger = 'border-danger';
      console.log('fffffffffff');
    }
  }

  onItemClick(sugg: any) {
    this.suggestions = [];
    const term = this.searchForm.value.searchterm;
    const searchin = this.searchForm.value.searchin;
    const selectedHeroValue = sugg.fieldValueId;
    this.router.navigate(['admin/searchlist'], { queryParams: { type: 'basic', keyword: term, searchin: searchin, exact: false, resource: selectedHeroValue } });
  }

  isToggledAdvanceSearch: boolean = false;
  toggle() {
    this.isToggledAdvanceSearch = !this.isToggledAdvanceSearch;
  }

  isToggledLimitTo: boolean = false;
  toggleLimitTo() {
    this.isToggledLimitTo = !this.isToggledLimitTo;
  }

  activeTab: string = 'accelerated';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

}
