import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChennaiHomePage } from './chennai-home.page';

describe('ChennaiHomePage', () => {
  let component: ChennaiHomePage;
  let fixture: ComponentFixture<ChennaiHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChennaiHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
