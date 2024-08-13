import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.page.html',
  styleUrls: ['./events-list.page.scss'],
})
export class EventsListPage implements OnInit {
  public events = [
   
    {
      title: 'Dewali Celebration',
      imgUrl: '/assets/images/dewali.webp',
      url: './events-details'
        },
    {
      title: 'Pongal Celebration',  
          imgUrl: '/assets/images/pongal.jpg',
          url: './events-details'
    },
    {
      title: 'Ramzon Celebration',
      imgUrl: '/assets/images/ramzon.jpg',
      url: './events-details'
    },
    {
      title: 'Waterday Celebration',
      imgUrl: '/assets/images/waterday.jpeg',
      url: './events-details'
    },
    {
      title: 'Christmas Celebration',
      imgUrl: '/assets/images/christmas.jpg',

      url: './events-details'
    },
    {
      title: 'Dewali Celebration',
      imgUrl: '/assets/images/dewali.webp',
      url: './events-details'
    },
    {
      title: 'Pongal Celebration',  
          imgUrl: '/assets/images/pongal.jpg',
          url: './events-details'
    },
    {
      title: 'Ramzon Celebration',
      imgUrl: '/assets/images/ramzon.jpg',
      url: './events-details'
    },
    {
      title: 'Waterday Celebration',
      imgUrl: '/assets/images/waterday.jpeg',
      url: '/photo-verification',
    },
    {
      title: 'Christmas Celebration',
      imgUrl: '/assets/images/christmas.jpg',
      url: '/photo-verification',
    },
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
