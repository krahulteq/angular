import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  @Input()
  // faq!: { q: string; a: string; }[];
  faq: { q: string, a: string }[] = [];

  ngOnInit() {
    // this.faq.forEach(element => {
      
      console.log(this.faq);
    // });
  }
}
