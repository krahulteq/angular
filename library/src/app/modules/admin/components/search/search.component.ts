import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SettingService } from '../../services/setting.service';
import { HttpParams } from '@angular/common/http';
import { query } from '@angular/animations';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() navbarSearch: any;

  searchForm: FormGroup;
  // acceleratedSearchForm: FormGroup;
  borderDanger: string = '';
  searchData: any;
  suggestions: any = [];
  selectedHeroValue: any;
  aRLMBorderDanger: string = '';
  levelmin: any;
  bBorderDanger: string = '';
  cBorderDanger: string = '';
  fBorderDanger: string = '';
  lBorderDanger: string = '';
  mBorderDanger: string = '';
  rBorderDanger: string = '';

  myForm: FormGroup;
  activeGate: string = '';
  blnBorderDanger: string = '';

  constructor(private fb: FormBuilder, private settingService: SettingService, private changeDetector: ChangeDetectorRef, private router: Router) {
    this.searchForm = this.fb.group({
      searchterm: ['', Validators.required],
      searchin: [''],
    });

    // Initialize the form with an empty form array
    this.myForm = this.fb.group({
      formControlsArray: this.fb.array([], Validators.required)
    });

    this.addControl('AND');
  }

  acceleratedSearchForm: any = new FormGroup({
    levelmin: new FormControl('', [Validators.required]),
    levelmax: new FormControl('', [Validators.required]),
    pointmin: new FormControl('', [Validators.required]),
    pointmax: new FormControl('', [Validators.required]),
    intrestlevel: new FormControl(''),
  });

  barcodeSearchForm: any = new FormGroup({
    start: new FormControl('', [Validators.required]),
    end: new FormControl('', [Validators.required]),
  });

  callSearchForm: any = new FormGroup({
    start: new FormControl('', [Validators.required]),
    end: new FormControl('', [Validators.required]),
  });

  fountasSearchForm: any = new FormGroup({
    levelmin: new FormControl('', [Validators.required]),
    levelmax: new FormControl('', [Validators.required]),
  });

  lexileSearchForm: any = new FormGroup({
    levelmin: new FormControl('', [Validators.required]),
    levelmax: new FormControl('', [Validators.required]),
    code: new FormControl(''),
    patronType: new FormControl(''),
  });

  marcSearchForm: any = new FormGroup({
    keyword: new FormControl('', [Validators.required]),
    searchin: new FormControl(''),
    exact: new FormControl(false),
  });

  readingSearchForm: any = new FormGroup({
    levelmin: new FormControl('', [Validators.required]),
    levelmax: new FormControl('', [Validators.required]),
    pointmin: new FormControl('', [Validators.required]),
    pointmax: new FormControl('', [Validators.required]),
    exact: new FormControl(false),
  });

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
      this.router.navigate(['admin/searchlist'], { queryParams: { type: 'Basic', keyword: term, searchin: searchin, exact: false } });
    } else {
      this.borderDanger = 'border-danger';
    }
  }

  advanceForm: any;
  onSubmitAdvanceSearch() {

    switch (this.activeTab) {
      case 'accelerated':
        if (this.acceleratedSearchForm.valid) {
          this.aRLMBorderDanger = '';
          const levelmin = this.acceleratedSearchForm.value.levelmin;
          const levelmax = this.acceleratedSearchForm.value.levelmax;
          const pointmin = this.acceleratedSearchForm.value.pointmin;
          const pointmax = this.acceleratedSearchForm.value.pointmax;
          const intrestlevel = this.acceleratedSearchForm.value.intrestlevel;
          this.router.navigate(['admin/searchlist'], { queryParams: { type: 'AcceleratedReader', levelmin: levelmin, levelmax: levelmax, pointmin: pointmin, pointmax: pointmax, int: intrestlevel } });
        } else {
          this.aRLMBorderDanger = 'border-danger';
        }
        break;
      case 'barcode':
        if (this.barcodeSearchForm.valid) {
          this.bBorderDanger = '';
          const start = this.barcodeSearchForm.value.start;
          const end = this.barcodeSearchForm.value.end;
          this.router.navigate(['admin/searchlist'], { queryParams: { type: 'Barcode', start: start, end: end, exact: false } });
        } else {
          this.bBorderDanger = 'border-danger';
        }
        break;
      case 'call':
        if (this.callSearchForm.valid) {
          this.cBorderDanger = '';
          const start = this.callSearchForm.value.start;
          const end = this.callSearchForm.value.end;
          this.router.navigate(['admin/searchlist'], { queryParams: { type: 'Call', start: start, end: end, exact: false } });
        } else {
          this.cBorderDanger = 'border-danger';
        }
        break;
      case 'fountas':
        if (this.fountasSearchForm.valid) {
          this.fBorderDanger = '';
          const levelmin = this.fountasSearchForm.value.levelmin;
          const levelmax = this.fountasSearchForm.value.levelmax;
          this.router.navigate(['admin/searchlist'], { queryParams: { type: 'Fountas', levelmin: levelmin, levelmax: levelmax, exact: false } });
        } else {
          this.fBorderDanger = 'border-danger';
        }
        break;
      case 'lexile':
        if (this.lexileSearchForm.valid) {
          this.lBorderDanger = '';
          const levelmin = this.lexileSearchForm.value.levelmin;
          const levelmax = this.lexileSearchForm.value.levelmax;
          const code = this.lexileSearchForm.value.code;
          const patronType = this.lexileSearchForm.value.patronType;
          this.router.navigate(['admin/searchlist'], { queryParams: { type: 'Lexile', levelmin: levelmin, levelmax: levelmax, code: code, patronType: patronType } });
        } else {
          this.lBorderDanger = 'border-danger';
        }
        break;
      case 'MARC':
        if (this.marcSearchForm.valid) {
          this.mBorderDanger = '';
          const keyword = this.marcSearchForm.value.keyword;
          const searchin = this.marcSearchForm.value.searchin;
          const exact = this.marcSearchForm.value.exact;

          this.router.navigate(['admin/searchlist'], { queryParams: { type: 'Marc', keyword: keyword, searchin: searchin, exact: exact } });
        } else {
          this.mBorderDanger = 'border-danger';
        }
        break;
      case 'reading':
        if (this.readingSearchForm.valid) {
          this.rBorderDanger = '';
          const levelmin = this.readingSearchForm.value.levelmin;
          const levelmax = this.readingSearchForm.value.levelmax;
          const pointmin = this.readingSearchForm.value.pointmin;
          const pointmax = this.readingSearchForm.value.pointmax;
          const exact = this.readingSearchForm.value.exact;
          this.router.navigate(['admin/searchlist'], { queryParams: { type: 'ReadingCounts', levelmin: levelmin, levelmax: levelmax, pointmin: pointmin, pointmax: pointmax, exact: exact } });
        } else {
          this.rBorderDanger = 'border-danger';
        }
        break;
      case 'boolean':
        if (this.myForm.valid) {
          // console.log(this.myForm.value.formControlsArray);
          this.blnBorderDanger = '';
          let params = new HttpParams;
          let count = 0;
          this.myForm.value.formControlsArray.forEach((item: any, index: any, arr: any) => {
            params = params.append(`term-${index + 1}`, item.searchTerm);
            params = params.append(`in-${index + 1}`, item.searchIn);
            if (index != 0) {
              params = params.append(`op-${index}`, item.searchOp);
            }

            if (index === arr.length - 1) {
              params = params.append(`op-${index+1}`, item.searchOp);
            }

            count += 1;
          });
          params = params.append('count', count);

          // // Loop through the array and append each item as a parameter
          // this.myForm.value.forEach((item: { searchTerm: string; searchIn: string; searchOp: string; }, index: any) => {
          // });

          // console.log(params);
          this.router.navigate(['admin/searchlist'], { queryParams: { type: 'Boolean', parameters: params } });
        } else {
          this.blnBorderDanger = 'border-danger';
        }
        break;

      default:
        break;
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

  // default search 
  activeTab: string = 'boolean';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  get formControlsArray() {
    return this.myForm.get('formControlsArray') as FormArray;
  }

  myIndex: any = 0;
  activeIndices: any[] = [];

  addControl(gate: string) {
    this.formControlsArray.push(this.fb.group({
      searchTerm: '',
      searchIn: '',
      searchOp: gate,
    }));
    this.activeIndices[this.myIndex] = gate;
    this.myIndex += 1;
  }

  removeControl(index: number) {
    // Remove the form control at the specified index from the form array
    this.formControlsArray.removeAt(index);
    this.myIndex -= 1;
    this.activeIndices.splice(index, 1);
  }

  items = [
    { name: 'AND' },
    { name: 'OR' },
    { name: 'NOT' },
  ];

  activeInputValue: any[] = [];

  setActive(gate: any, i: any): void {
    this.activeIndices[i] = gate;
    this.formControlsArray.at(i).get('searchOp')?.patchValue(gate);
    // const valuee = this.formControlsArray.at(i).value.searchOp;
    // console.log(valuee);
  }

}
