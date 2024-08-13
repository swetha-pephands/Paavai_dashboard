import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerformencePage } from './performence.page';

describe('PerformencePage', () => {
  let component: PerformencePage;
  let fixture: ComponentFixture<PerformencePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
