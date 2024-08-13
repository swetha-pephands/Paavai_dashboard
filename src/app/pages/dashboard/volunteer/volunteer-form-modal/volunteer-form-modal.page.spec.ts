import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VolunteerFormModalPage } from './volunteer-form-modal.page';

describe('VolunteerFormModalPage', () => {
  let component: VolunteerFormModalPage;
  let fixture: ComponentFixture<VolunteerFormModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerFormModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
