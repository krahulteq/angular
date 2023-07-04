import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  @Input() faqs: any;
  @Input() faqCaption: any;
  @Input() manageView: any;
}
