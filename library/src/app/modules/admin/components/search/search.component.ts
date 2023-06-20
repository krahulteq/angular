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
  borderDanger: string = '';
  searchData: any;

  constructor(private fb: FormBuilder, private changeDetector: ChangeDetectorRef, private router: Router) {
    this.searchForm = this.fb.group({
      searchterm: ['', Validators.required],
      searchin: [''],
    });
  }

  onSubmit() {
    if (this.searchForm.valid) {
      const term = this.searchForm.value.searchterm;
      const searchin = this.searchForm.value.searchin;
      this.borderDanger = '';
      this.router.navigate(['admin/searchlist'], { queryParams: { type: 'basic', keyword: term, searchin: searchin, exact: false } });
    } else {
      this.borderDanger = 'border-danger';
    }
  }

}
