import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StaffCountDetailsPage } from './staff-count-details.page';

describe('StaffCountDetailsPage', () => {
  let component: StaffCountDetailsPage;
  let fixture: ComponentFixture<StaffCountDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffCountDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
