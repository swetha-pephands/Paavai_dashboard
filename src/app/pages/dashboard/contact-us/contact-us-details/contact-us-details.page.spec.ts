import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactUsDetailsPage } from './contact-us-details.page';

describe('ContactUsDetailsPage', () => {
  let component: ContactUsDetailsPage;
  let fixture: ComponentFixture<ContactUsDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
