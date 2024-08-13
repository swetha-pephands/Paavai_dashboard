import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InmatesCountPage } from './inmates-count.page';

describe('InmatesCountPage', () => {
  let component: InmatesCountPage;
  let fixture: ComponentFixture<InmatesCountPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InmatesCountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
