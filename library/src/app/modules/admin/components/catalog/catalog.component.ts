import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
  @Input() catalogCaption: any;
  @Input() catalogContent: any;
  @Input() manageView: any;
}
