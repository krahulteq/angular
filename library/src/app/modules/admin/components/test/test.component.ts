import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  @Output() newItemEvent = new EventEmitter<string>();
  value: any;

  // addNewItem(value: string) {
  //   this.newItemEvent.emit(value);
  // }

  // ngOnInit(){
  //   this.value = 'hello';
  //   this.newItemEvent.emit(this.value);
  // }

}
