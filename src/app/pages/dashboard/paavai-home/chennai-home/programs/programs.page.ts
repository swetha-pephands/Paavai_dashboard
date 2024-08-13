import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.page.html',
  styleUrls: ['./programs.page.scss'],
})
export class ProgramsPage implements OnInit {
  public programs =[

    {
      title: ' Recent Programs',
      imgUrl: '/assets/images/recent-event.png',
      url: './recent-programs',
     
    },
    {
      title: 'Upcoming Programs',  
          imgUrl: '/assets/images/upcoming-event.png',
      url: './upcoming-programs',
    
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
