import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribHeaderComponent } from './contrib-header.component';

describe('ContribHeaderComponent', () => {
  let component: ContribHeaderComponent;
  let fixture: ComponentFixture<ContribHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContribHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContribHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
