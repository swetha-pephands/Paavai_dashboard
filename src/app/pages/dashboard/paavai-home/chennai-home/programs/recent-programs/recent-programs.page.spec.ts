import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecentProgramsPage } from './recent-programs.page';

describe('RecentProgramsPage', () => {
  let component: RecentProgramsPage;
  let fixture: ComponentFixture<RecentProgramsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentProgramsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
