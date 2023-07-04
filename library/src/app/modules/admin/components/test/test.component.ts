import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  activeTab: string = 'tab1';
  editPageClass: string = '';
  editPageClassStatus: any;

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  user = {
    name: '',
    email: ''
  };

  onSubmit() {
    // Form submission logic goes here
    console.log(this.user);
  }

  editPage(status: any){
    if(status){
      this.editPageClass = '';
      this.editPageClassStatus = false;
    }else{
      this.editPageClass = 'manage-view';
      this.editPageClassStatus = true;
    }
  }

}
