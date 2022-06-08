import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingsSuggestComponent } from './meetings-suggest.component';

describe('MeetingsSuggestComponent', () => {
  let component: MeetingsSuggestComponent;
  let fixture: ComponentFixture<MeetingsSuggestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingsSuggestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingsSuggestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
