import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribSideNavComponent } from './contrib-side-nav.component';

describe('ContribSideNavComponent', () => {
  let component: ContribSideNavComponent;
  let fixture: ComponentFixture<ContribSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContribSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContribSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
