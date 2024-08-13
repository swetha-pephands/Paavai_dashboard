import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  messages: any[] = [];

  constructor(private notificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.notificationService.getMessages().subscribe(messages => {
      this.messages = messages;
    });

    // Fetch messages when the page is initialized
    this.notificationService.fetchMessages();
  }

  markAsRead(messageId: number) {
    this.notificationService.markMessageAsRead(messageId);
  }
  closePage() {
    this.router.navigate(['/home']); // Navigate to the desired page or use `this.navCtrl.pop();` if using NavController
  }
}