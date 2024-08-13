import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OutreachProgramPage } from './outreach-program.page';

describe('OutreachProgramPage', () => {
  let component: OutreachProgramPage;
  let fixture: ComponentFixture<OutreachProgramPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OutreachProgramPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
