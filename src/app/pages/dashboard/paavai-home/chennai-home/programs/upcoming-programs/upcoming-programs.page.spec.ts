import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpcomingProgramsPage } from './upcoming-programs.page';

describe('UpcomingProgramsPage', () => {
  let component: UpcomingProgramsPage;
  let fixture: ComponentFixture<UpcomingProgramsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingProgramsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
