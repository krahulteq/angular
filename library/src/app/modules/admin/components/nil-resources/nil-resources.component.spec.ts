import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NilResourcesComponent } from './nil-resources.component';

describe('NilResourcesComponent', () => {
  let component: NilResourcesComponent;
  let fixture: ComponentFixture<NilResourcesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NilResourcesComponent]
    });
    fixture = TestBed.createComponent(NilResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
