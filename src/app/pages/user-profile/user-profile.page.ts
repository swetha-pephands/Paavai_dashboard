import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  profile = {
    name: '',
    email: '',
    phone: '',
    address: ''
  };

  constructor() {}
  ngOnInit(): void {

  }

  saveProfile() {
    // Save profile data logic here, e.g., local storage, API call, etc.
    console.log('Profile saved', this.profile);
    // You could also use an alert or toast to notify the user
  }

  ionViewWillEnter() {
    // Load profile data when the page is about to enter and become the active page
    // This could be from local storage, a service, or an API
  }
}
