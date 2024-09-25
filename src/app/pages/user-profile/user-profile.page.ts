import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  profileForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.profileForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', Validators.required],
      image: ['']
    });
  }

  onImageSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profileForm.patchValue({
          image: e.target.result
        });
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  saveProfile() {
    if (this.profileForm.valid) {
      const profile = this.profileForm.value;
      this.userService.setUser(profile); // Save profile to UserService
      this.router.navigate(['/home/dashboard']); // Navigate to the dashboard after saving
    } else {
      console.log('Form is invalid');
      this.profileForm.markAllAsTouched(); // Mark all fields as touched to show error messages
    }
  }

  get name() {
    return this.profileForm.get('name');
  }

  get email() {
    return this.profileForm.get('email');
  }

  get phone() {
    return this.profileForm.get('phone');
  }

  get address() {
    return this.profileForm.get('address');
  }
}
