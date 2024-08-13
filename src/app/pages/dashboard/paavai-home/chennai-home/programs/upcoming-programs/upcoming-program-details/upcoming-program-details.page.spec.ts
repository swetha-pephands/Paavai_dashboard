import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpcomingProgramDetailsPage } from './upcoming-program-details.page';

describe('UpcomingProgramDetailsPage', () => {
  let component: UpcomingProgramDetailsPage;
  let fixture: ComponentFixture<UpcomingProgramDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingProgramDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
