import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedByComponent } from './logged-by-component.component';

describe('LoggedByComponentComponent', () => {
  let component: LoggedByComponent;
  let fixture: ComponentFixture<LoggedByComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedByComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
