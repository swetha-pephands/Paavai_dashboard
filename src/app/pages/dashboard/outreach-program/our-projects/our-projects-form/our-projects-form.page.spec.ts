import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OurProjectsFormPage } from './our-projects-form.page';

describe('OurProjectsFormPage', () => {
  let component: OurProjectsFormPage;
  let fixture: ComponentFixture<OurProjectsFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OurProjectsFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
