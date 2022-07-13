import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarSynComponent } from './calendar-syn.component';

describe('CalendarSynComponent', () => {
  let component: CalendarSynComponent;
  let fixture: ComponentFixture<CalendarSynComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarSynComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarSynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
