import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggComponent } from './sugg.component';

describe('SuggComponent', () => {
  let component: SuggComponent;
  let fixture: ComponentFixture<SuggComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
