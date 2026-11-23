import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIntervenants } from './list-intervenants';

describe('ListIntervenants', () => {
  let component: ListIntervenants;
  let fixture: ComponentFixture<ListIntervenants>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListIntervenants],
    }).compileComponents();

    fixture = TestBed.createComponent(ListIntervenants);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
