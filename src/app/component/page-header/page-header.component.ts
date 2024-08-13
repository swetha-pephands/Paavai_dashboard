import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent  implements OnInit {
  @Input()
  title: string = '';
  hasNotifications: boolean = false;

  constructor(private navCtrl: NavController, private notificationService: NotificationService) {}

  ngOnInit() {
    // Subscribe to the unread messages observable
    this.notificationService.getUnreadMessages().subscribe(hasUnread => {
      this.hasNotifications = hasUnread;
    });

    // Fetch messages when the component initializes
    this.notificationService.fetchMessages();
  }

  goToNotifications() {
    // Mark messages as read when navigating to the notifications page
    this.notificationService.updateUnreadMessages(false);
    this.navCtrl.navigateForward('/notifications');
  }
}
