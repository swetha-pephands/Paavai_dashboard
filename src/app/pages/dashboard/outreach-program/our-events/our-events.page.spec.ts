import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OurEventsPage } from './our-events.page';

describe('OurEventsPage', () => {
  let component: OurEventsPage;
  let fixture: ComponentFixture<OurEventsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OurEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
