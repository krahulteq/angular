import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SettingService } from '../../services/setting.service';

@Component({
  selector: 'app-resource-detail',
  templateUrl: './resource-detail.component.html',
  styleUrls: ['./resource-detail.component.scss']
})
export class ResourceDetailComponent {
  title = 'Resource Detail';
  downloadCSV = false;
  divVisible = true;
  resource: any;
  constructor(private route: ActivatedRoute, private settingService: SettingService) { }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const key = params.get('key');
      const id = params.get('id');

      this.divVisible = true;
      this.settingService.resourceDetailService(key, id).subscribe((response: any) => {
        setTimeout(() => {
          this.divVisible = false;
        }, 1000);
        // console.log(response.data);
        this.resource = response.data;
      });
    });
  }
}
