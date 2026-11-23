import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderEvents } from './calender-events';

describe('CalenderEvents', () => {
  let component: CalenderEvents;
  let fixture: ComponentFixture<CalenderEvents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalenderEvents],
    }).compileComponents();

    fixture = TestBed.createComponent(CalenderEvents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
