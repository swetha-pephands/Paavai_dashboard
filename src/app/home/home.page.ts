import { Component, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  largeScreen: boolean = false;

  constructor(private platform: Platform) {
    // Check initial screen size
    this.checkScreenSize();
  }

  // Listen to window resize events to detect screen size changes
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  // Check if the screen size is large (e.g., a tablet or desktop)
  checkScreenSize() {
    const width = this.platform.width();
    this.largeScreen = width >= 768; // Example: 768px and above is considered a large screen
  }

  // Method to handle closing the menu from child components
  closeMenu(menuId: any) {
    if (menuId) {
      menuId.close();
    }
  }
}