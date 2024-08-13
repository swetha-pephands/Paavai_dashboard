import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mobileNumber: string = ''; // Initialize mobile number
  password: string = ''; // No default value; user must type this
  showPassword: boolean = false;

  constructor(private router: Router, private userService: UserService) {}

  login() {
    if (this.mobileNumber && this.password === '000000') {
      // Store user data in the service
      this.userService.setUser({ mobileNumber: this.mobileNumber });

      // Navigate to the home page
      this.router.navigate(['/home']);
    } else {
      // Handle error (e.g., show an alert or toast)
      alert('Please enter a valid mobile number and the correct password.');
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  ngOnInit(): void {
    // Additional initialization logic can go here if needed
  }
}
