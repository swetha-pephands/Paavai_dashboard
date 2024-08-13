import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarksheetPage } from './marksheet.page';

describe('MarksheetPage', () => {
  let component: MarksheetPage;
  let fixture: ComponentFixture<MarksheetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MarksheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
