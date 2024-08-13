import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EducationCampaginsPage } from './education-campagins.page';

describe('EducationCampaginsPage', () => {
  let component: EducationCampaginsPage;
  let fixture: ComponentFixture<EducationCampaginsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationCampaginsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
