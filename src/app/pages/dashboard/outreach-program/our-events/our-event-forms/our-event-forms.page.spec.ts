import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OurEventFormsPage } from './our-event-forms.page';

describe('OurEventFormsPage', () => {
  let component: OurEventFormsPage;
  let fixture: ComponentFixture<OurEventFormsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OurEventFormsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
