import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarSuggComponent } from './calendar-sugg.component';

describe('CalendarSuggComponent', () => {
  let component: CalendarSuggComponent;
  let fixture: ComponentFixture<CalendarSuggComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarSuggComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarSuggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
