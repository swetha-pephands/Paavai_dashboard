import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedicalCampaignPage } from './medical-campaign.page';

describe('MedicalCampaignPage', () => {
  let component: MedicalCampaignPage;
  let fixture: ComponentFixture<MedicalCampaignPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalCampaignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
