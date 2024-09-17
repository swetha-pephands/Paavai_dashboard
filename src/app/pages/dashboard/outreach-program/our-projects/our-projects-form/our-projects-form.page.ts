import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-our-projects-form',
  templateUrl: './our-projects-form.page.html',
  styleUrls: ['./our-projects-form.page.scss'],
})
export class OurProjectsFormPage implements OnInit {

  form!: FormGroup;
  districts: string[] = ['District 1', 'District 2', 'District 3']; // Add your district options here

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      photo: [null, Validators.required],
      district: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.form.patchValue({
        photo: file
      });
    }
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      // Handle form submission
    }
  }
}