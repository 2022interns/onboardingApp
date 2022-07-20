import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunshMeetingComponent } from './launsh-meeting.component';

describe('LaunshMeetingComponent', () => {
  let component: LaunshMeetingComponent;
  let fixture: ComponentFixture<LaunshMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunshMeetingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunshMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
