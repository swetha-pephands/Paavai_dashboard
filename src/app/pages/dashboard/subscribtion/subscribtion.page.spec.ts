import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubscribtionPage } from './subscribtion.page';

describe('SubscribtionPage', () => {
  let component: SubscribtionPage;
  let fixture: ComponentFixture<SubscribtionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribtionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
