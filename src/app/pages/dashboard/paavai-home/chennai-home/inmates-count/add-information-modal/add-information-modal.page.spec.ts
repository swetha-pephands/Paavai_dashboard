import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddInformationModalPage } from './add-information-modal.page';

describe('AddInformationModalPage', () => {
  let component: AddInformationModalPage;
  let fixture: ComponentFixture<AddInformationModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInformationModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
