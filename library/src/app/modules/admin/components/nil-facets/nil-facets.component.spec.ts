import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NilFacetsComponent } from './nil-facets.component';

describe('NilFacetsComponent', () => {
  let component: NilFacetsComponent;
  let fixture: ComponentFixture<NilFacetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NilFacetsComponent]
    });
    fixture = TestBed.createComponent(NilFacetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
