import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactUsFormPage } from './contact-us-form.page';

describe('ContactUsFormPage', () => {
  let component: ContactUsFormPage;
  let fixture: ComponentFixture<ContactUsFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
