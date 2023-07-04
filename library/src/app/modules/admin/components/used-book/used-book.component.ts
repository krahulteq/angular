import { Component, Input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-used-book',
  templateUrl: './used-book.component.html',
  styleUrls: ['./used-book.component.scss']
})
export class UsedBookComponent {
  @Input() usedbookCaption: any;
  @Input()
  usedbook!: SafeHtml;
  @Input() manageView: any;
}
