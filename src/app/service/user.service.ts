import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: any = null; // Use null or a default object

  constructor() {}

  // Set user profile data
  setUser(profile: any) {
    this.user = profile;
    // You might want to persist this data (e.g., localStorage) or sync it with a backend server
  }

  // Get user profile data
  getUser() {
    return this.user;
  }

  // Clear user data (e.g., on logout)
  clearUser() {
    this.user = null;
  }
}
