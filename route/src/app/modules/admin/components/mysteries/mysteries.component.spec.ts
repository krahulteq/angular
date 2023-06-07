import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysteriesComponent } from './mysteries.component';

describe('MysteriesComponent', () => {
  let component: MysteriesComponent;
  let fixture: ComponentFixture<MysteriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MysteriesComponent]
    });
    fixture = TestBed.createComponent(MysteriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
