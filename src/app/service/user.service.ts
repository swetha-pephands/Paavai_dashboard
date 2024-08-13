import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: any = null;

  constructor() {}

  setUser(user: any) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }

  logout() {
    this.user = null;
    // Add any additional logout logic here
  }
}
