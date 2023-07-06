import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  catalogWidth: string = 'fullWidth';
  currentCatalogWidth: any;
  edit(event: boolean) {
    this.editCatalog = event;
  }

  catalogForm: any = new FormGroup({
    bulletinId: new FormControl('', [Validators.required]),
    width: new FormControl('', [Validators.required]),
  });

  constructor(private auth: AuthService) { }

  onSubmit() {
    const access_token = this.auth.getToken();
    this.isSubmitting = true;
    this.auth.editCatalogSettings(access_token, this.catalogForm.value.bulletinId, this.catalogForm.value.width).subscribe((response: any) => {
      if (response.status) {
        this.isSubmitting = false;
        this.editCatalog = false;
      }
      if (response.data.settings.width === 'H') {
        this.catalogWidth = 'halfWidth';
        this.currentCatalogWidth = 'halfWidth';
      } else {
        this.catalogWidth = 'fullWidth';
        this.currentCatalogWidth = 'fullWidth';
      }
    });
  }

  ngOnChanges() {
    if (this.currentCatalogWidth) {
      if(this.currentCatalogWidth === 'halfWidth'){
        this.catalogForm.get('bulletinId').patchValue(this.catalog?.settings.bulletinId);
        this.catalogForm.get('width').patchValue('H');
      }else{
        this.catalogForm.get('bulletinId').patchValue(this.catalog?.settings.bulletinId);
        this.catalogForm.get('width').patchValue('F');
      }
      this.catalogWidth = this.currentCatalogWidth;
    } else {
      this.catalogForm.get('bulletinId').patchValue(this.catalog?.settings.bulletinId);
      this.catalogForm.get('width').patchValue(this.catalog?.settings.width);
      if (this.catalog?.settings.width === 'H') {
        this.catalogWidth = 'halfWidth';
      } else {
        this.catalogWidth = 'fullWidth';
      }
    }
  }
}
