import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private unreadMessages = new BehaviorSubject<boolean>(false);
  private messages = new BehaviorSubject<any[]>([]);

  constructor() {}

  // Observable to track unread message status
  getUnreadMessages() {
    return this.unreadMessages.asObservable();
  }

  // Observable to track messages
  getMessages() {
    return this.messages.asObservable();
  }

  // Method to update the unread status
  updateUnreadMessages(hasUnread: boolean) {
    this.unreadMessages.next(hasUnread);
  }

  // Fetch or simulate fetching messages
  fetchMessages() {
    // Simulated messages, replace with actual API call or real-time data
    const messages = [
      { id: 1, text: 'New message 1', read: false },
      { id: 2, text: 'New message 2', read: true },
      { id: 3, text: 'New message 3', read: false }
    ];

    // Update messages and unread status
    this.messages.next(messages);

    // Update the unread messages status based on the fetched messages
    const hasUnread = messages.some(message => !message.read);
    this.updateUnreadMessages(hasUnread);
  }

  // Optional: Mark a specific message as read
  markMessageAsRead(messageId: number) {
    const updatedMessages = this.messages.getValue().map(message => {
      if (message.id === messageId) {
        return { ...message, read: true };
      }
      return message;
    });

    this.messages.next(updatedMessages);
    this.updateUnreadMessages(updatedMessages.some(message => !message.read));
  }
}
