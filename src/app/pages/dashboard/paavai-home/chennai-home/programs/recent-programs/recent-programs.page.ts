import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-programs',
  templateUrl: './recent-programs.page.html',
  styleUrls: ['./recent-programs.page.scss'],
})
export class RecentProgramsPage implements OnInit {
  public events = [
   
    {
      title: 'Dewali Celebration',
      imgUrl: '/assets/images/dewali.webp',
      url: './paavai-home',
    },
    {
      title: 'Pongal Celebration',  
          imgUrl: '/assets/images/pongal.jpg',
      url: '/contact-verification',
    },
    {
      title: 'Ramzon Celebration',
      imgUrl: '/assets/images/ramzon.jpg',
      url: '/rating-genuinity',
    },
    {
      title: 'Waterday Celebration',
      imgUrl: '/assets/images/waterday.jpeg',
      url: '/photo-verification',
    },
    {
      title: 'Christmas Celebration',
      imgUrl: '/assets/images/christmas.jpg',

      url: '/document-verification',
    },
    {
      title: 'Dewali Celebration',
      imgUrl: '/assets/images/dewali.webp',
      url: './paavai-home',
    },
    {
      title: 'Pongal Celebration',  
          imgUrl: '/assets/images/pongal.jpg',
      url: '/contact-verification',
    },
    {
      title: 'Ramzon Celebration',
      imgUrl: '/assets/images/ramzon.jpg',
      url: '/rating-genuinity',
    },
    {
      title: 'Waterday Celebration',
      imgUrl: '/assets/images/waterday.jpeg',
      url: '/photo-verification',
    },
    {
      title: 'Christmas Celebration',
      imgUrl: '/assets/images/christmas.jpg',

      url: '/document-verification',
    },
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
