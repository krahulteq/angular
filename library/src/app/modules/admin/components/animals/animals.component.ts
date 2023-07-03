import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent {
  @Input() animalCaption: any;
  @Input() animals: any;
  constructor() {}
  ngOnChanges(){
    console.log(this.animals);
  }
}
