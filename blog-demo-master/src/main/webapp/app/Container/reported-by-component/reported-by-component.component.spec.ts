import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportedByComponent } from './reported-by-component.component';

describe('ReportedByComponent', () => {
  let component: ReportedByComponent;
  let fixture: ComponentFixture<ReportedByComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportedByComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportedByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
