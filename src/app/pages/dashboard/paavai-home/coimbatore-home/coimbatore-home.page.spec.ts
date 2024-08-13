import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoimbatoreHomePage } from './coimbatore-home.page';

describe('CoimbatoreHomePage', () => {
  let component: CoimbatoreHomePage;
  let fixture: ComponentFixture<CoimbatoreHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CoimbatoreHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
