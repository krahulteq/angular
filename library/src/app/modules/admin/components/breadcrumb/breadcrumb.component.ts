import { TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  providers: [TitleCasePipe],
})
export class BreadcrumbComponent {
@Input() title: any;
@Input() downloadCSV: any;
}
