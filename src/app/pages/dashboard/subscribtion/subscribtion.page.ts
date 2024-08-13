import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribtion',
  templateUrl: './subscribtion.page.html',
  styleUrls: ['./subscribtion.page.scss'],
})
export class SubscribtionPage implements OnInit {

  emailList: string[] = [
    'john.doe@example.com',
    'jane.doe@example.com',
    'user1@example.com',
    'user2@example.com',
    'someone@example.com',
    'john.doe@example.com',
    'jane.doe@example.com',
    'user1@example.com',
    'user2@example.com',
    'someone@example.com'
  ];
  constructor() { }

  ngOnInit() {
  }

}
