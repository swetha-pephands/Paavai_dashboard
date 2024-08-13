import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StaffCountPage } from './staff-count.page';

describe('StaffCountPage', () => {
  let component: StaffCountPage;
  let fixture: ComponentFixture<StaffCountPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffCountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
