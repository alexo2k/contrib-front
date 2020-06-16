import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContribFooterComponent } from './app-contrib-footer.component';

describe('AppContribFooterComponent', () => {
  let component: AppContribFooterComponent;
  let fixture: ComponentFixture<AppContribFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppContribFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppContribFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
