import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaavaiHomePage } from './paavai-home.page';

describe('PaavaiHomePage', () => {
  let component: PaavaiHomePage;
  let fixture: ComponentFixture<PaavaiHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaavaiHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
