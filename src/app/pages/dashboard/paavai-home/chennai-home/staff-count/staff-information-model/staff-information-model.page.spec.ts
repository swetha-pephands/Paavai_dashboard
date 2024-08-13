import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StaffInformationModelPage } from './staff-information-model.page';

describe('StaffInformationModelPage', () => {
  let component: StaffInformationModelPage;
  let fixture: ComponentFixture<StaffInformationModelPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffInformationModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
