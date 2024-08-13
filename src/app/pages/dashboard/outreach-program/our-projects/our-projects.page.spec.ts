import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OurProjectsPage } from './our-projects.page';

describe('OurProjectsPage', () => {
  let component: OurProjectsPage;
  let fixture: ComponentFixture<OurProjectsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OurProjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
