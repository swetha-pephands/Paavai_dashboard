import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-volunteer-form-modal',
  templateUrl: './volunteer-form-modal.page.html',
  styleUrls: ['./volunteer-form-modal.page.scss'],
})
export class VolunteerFormModalPage implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private modalCtrl: ModalController // Use ModalController instead of NavController
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      phone: [
        '', 
        [Validators.required, Validators.pattern('^[0-9]{10}$')]
      ],
      subject: ['', Validators.required],
      email: [
        '', 
        [Validators.required, Validators.email]
      ],
      message: ['', Validators.required],
    });
  }
  closeForm() {
    this.modalCtrl.dismiss(); // Dismisses the modal
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      // Handle form submission
    }
  }

  validatePhone(event: any) {
    const input = event.target.value;
    if (input && input.length > 10) {
      this.form.controls['phone'].setValue(input.slice(0, 10));
    }
  }
}

