import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InmatesCountDetailsPage } from './inmates-count-details.page';

describe('InmatesCountDetailsPage', () => {
  let component: InmatesCountDetailsPage;
  let fixture: ComponentFixture<InmatesCountDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InmatesCountDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
