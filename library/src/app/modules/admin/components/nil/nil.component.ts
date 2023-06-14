import { Component } from '@angular/core';

@Component({
  selector: 'app-nil',
  templateUrl: './nil.component.html',
  styleUrls: ['./nil.component.scss']
})
export class NilComponent {
  divVisible = true;

  title = 'new in library';

  ngOnInit() {
    setTimeout(() => {
      this.divVisible = false;
    }, 1000);
  }
}
