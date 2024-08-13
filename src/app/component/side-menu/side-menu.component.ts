import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent  implements OnInit {
  @Output() closeMenu: EventEmitter<void> = new EventEmitter<void>();


  public adminPages = [
    { title: 'My Dashboard', url: '/home/dashboard', icon: 'clipboard-outline' },
    {
      title: 'Paavai Home', url: 'dashboard/paavai-home',icon: 'home-outline'},
    { title: 'Outreach Programs', url: 'dashboard/outreach-program', icon: 'earth-outline' },
    { title: 'Medical Campaign', url: 'dashboard/medical-campaign', icon: 'medical-outline' },
    { title: 'Education Campaign', url: 'dashboard/education-campagins', icon: 'book-outline' },
    { title: 'Achivement', url: '', icon: 'medal-outline' },
    { title: 'Marksheet', url: 'dashboard/marksheet', icon: 'reader-outline' },
    { title: 'Contact Us', url: 'dashboard/contact-us', icon: 'call-outline' },
    { title: 'Volunteers', url: 'v/volunteer', icon: 'people-outline' },
    { title: 'Donation', url: 'dashboard/donation', icon: 'cash-outline' },
    { title: 'Subscribers', url: 'dashboard/subscribtion', icon: 'checkmark-circle-outline' },
    { title: 'Performence', url: 'dashboard/performence', icon: 'stats-chart-outline' },

  ];
 
  public user: any;

  constructor(private router: Router,
    private menuCtrl: MenuController,
    private userService: UserService
  ){}


  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
    this.user = this.userService.getUser();  // Get user data
  }


  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }


  navigate(url: string) {
    this.router.navigate([url]);
    this.closeMenuHandler();  // Close the menu after navigation
  }

  closeMenuHandler() {
    this.closeMenu.emit();
  }
  
}
