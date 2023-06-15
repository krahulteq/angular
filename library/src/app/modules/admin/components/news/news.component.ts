import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  divVisible = true;

  title = 'library news';

  ngOnInit() {
    setTimeout(() => {
      this.divVisible = false;
    }, 1000);
  }
}
