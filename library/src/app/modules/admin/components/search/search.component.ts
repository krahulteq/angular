import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SettingService } from '../../services/setting.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() navbarSearch: any;

  constructor(private router: Router, private settingService: SettingService) { }

  searchForm: any = new FormGroup({
    searchterm: new FormControl('', [Validators.required]),
  });

  get searchterm() {
    return this.searchForm.get('searchterm');
  }

  loginForm: any = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  searchfcn(): void {
    // const term = this.searchForm.value.searchterm;
    const term = 'harry';
    console.log(term);
    this.settingService.searchfcnService(term).subscribe((response: any) => {
      console.log(response);
      // this.userProfile = response.data;
    });
  }
}
