import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SettingService } from '../../services/setting.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
  @Input() catalog: any;
  @Input() manageView: any;
  editCatalog: boolean = false;
  isSubmitting = false;
  edit(event: boolean) {
    this.editCatalog = event;
  }
  
  catalogForm: any = new FormGroup({
    bulletinId: new FormControl('', [Validators.required]),
    width: new FormControl('', [Validators.required]),
  });
  
  constructor(private auth: AuthService) { }
  
  onSubmit() {
    // Form submission logic goes here
    console.log(this.catalogForm.value);
    const access_token = this.auth.getToken();
    this.isSubmitting = true;
    this.auth.editCatalogSettings(access_token, this.catalogForm.value.bulletinId, this.catalogForm.value.width).subscribe((response: any) => {
      if(response.status){
        this.isSubmitting = false;
        this.editCatalog = false;
      }
    });
  }

  ngOnChanges() {
    this.catalogForm.get('bulletinId').patchValue(this.catalog?.settings.bulletinId);
    this.catalogForm.get('width').patchValue(this.catalog?.settings.width);
  }
}
