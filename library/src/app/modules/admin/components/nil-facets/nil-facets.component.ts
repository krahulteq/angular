import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nil-facets',
  templateUrl: './nil-facets.component.html',
  styleUrls: ['./nil-facets.component.scss']
})
export class NilFacetsComponent {
@Input() facets: any;
}
