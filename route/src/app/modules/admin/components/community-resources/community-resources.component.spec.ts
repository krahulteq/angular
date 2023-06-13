import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityResourcesComponent } from './community-resources.component';

describe('CommunityResourcesComponent', () => {
  let component: CommunityResourcesComponent;
  let fixture: ComponentFixture<CommunityResourcesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommunityResourcesComponent]
    });
    fixture = TestBed.createComponent(CommunityResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
