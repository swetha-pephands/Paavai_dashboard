import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outreach-program',
  templateUrl: './outreach-program.page.html',
  styleUrls: ['./outreach-program.page.scss'],
})
export class OutreachProgramPage implements OnInit {
  public programs =[

  
    {
      title: 'Our Events',  
          imgUrl: '/assets/images/our-events.png',
      url: './our-events',
    
    },

    {
      title: ' Our Projects',
      imgUrl: '/assets/images/our-programs.png',
      url: './our-projects',
     
    },
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
