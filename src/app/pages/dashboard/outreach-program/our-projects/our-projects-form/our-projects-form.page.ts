import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-our-projects-form',
  templateUrl: './our-projects-form.page.html',
  styleUrls: ['./our-projects-form.page.scss'],
})
export class OurProjectsFormPage implements OnInit {

  form: FormGroup;
  districts: string[] = ['District 1', 'District 2', 'District 3'];
  
  // Define indicators with sub-indicators
  indicators = [
    { name: 'Health', subIndicators: ['Sub 1', 'Sub 2'] },
    { name: 'Education', subIndicators: ['Sub 3', 'Sub 4'] },
    { name: 'Environment', subIndicators: ['Sub 5', 'Sub 6'] }
  ];

  // Initialize as string[] to avoid 'never[]' issues
  selectedSubIndicators: string[] = [];

  constructor(private fb: FormBuilder,
    private modalController: ModalController
  ) {
    // Define form with the correct structure
    this.form = this.fb.group({
      photo: ['', Validators.required],
      date: ['', Validators.required],
      indicator: ['', Validators.required],
      subIndicator: ['', Validators.required],  // Ensure it's a form control
      programType: ['', Validators.required],
      venue: ['', Validators.required],
      district: ['', Validators.required],
      beneficiariesCount: ['', [Validators.required, Validators.min(1)]],
      gender: ['', Validators.required]
    });
  }
  ngOnInit(): void {
  }

  // File handling for the photo input
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.form.patchValue({ photo: file });
    }
  }

  // Update sub-indicators based on the selected indicator
  onIndicatorChange(event: any) {
    const selectedIndicator = event.detail.value;
    const indicator = this.indicators.find(ind => ind.name === selectedIndicator);
    
    // Update the subIndicators if the indicator is found
    if (indicator) {
      this.selectedSubIndicators = indicator.subIndicators;
    } else {
      this.selectedSubIndicators = [];
    }
  }

  // Handle form submission
  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      // Perform the desired form submission logic here
    }
  }

  // Close modal method
  closeModal() {
    this.modalController.dismiss(); // Dismiss the modal
  }

  save() {
    // Implement save logic here, e.g., save form data to database or perform any action
    console.log('Save button clicked');
    this.closeModal(); // Example: Close modal after saving
  }
}
