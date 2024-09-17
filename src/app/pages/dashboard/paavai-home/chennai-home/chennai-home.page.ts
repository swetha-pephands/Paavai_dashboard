import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chennai-home',
  templateUrl: './chennai-home.page.html',
  styleUrls: ['./chennai-home.page.scss'],
})
export class ChennaiHomePage implements OnInit {
  public details = [
    { title: 'Home Name:', answer: 'Paavai Foundation', icon: 'home-outline' },
    { title: 'Email:', answer: 'paavaifoundation@gmail.com', icon: 'mail-open-outline' },
    { title: 'Phone Number:', answer: '044-24500656', icon: 'phone-portrait-outline' },
    { title: 'Address:', answer: 'Plot No:3, Vinayal Avenue, Okkiyam Pettai, Thoraipakkam, Kanchipuram-600097.', icon: 'location-outline' },
    { title: 'Image:', answer: 'Paavai Foundation', icon: 'image-outline' },
    { title: 'Incharge Name:', answer: 'Rajesh', icon: 'person-outline' },
    { title: 'Incharge Number:', answer: '9176 355 511', icon: 'call-outline' },
    { title: 'Inmates Count:', answer: '500', url: './inmates-count', icon: 'people-outline', btn: 'Details' },
    { title: 'Staff Count:', answer: '100', url: './staff-count', icon: 'person-add-outline', btn: 'Details' }
  ];

  public details_card =[

    {
      title: ' Events',
      imgUrl: '/assets/images/event.png',
      discription: '"Your trusted partner for secure homes."      ',
      url: './events-list',
      btn: 'Details',
    },
    {
      title: 'Programs',  
          imgUrl: '/assets/images/program.png',
          discription:'"Empowering communities through outreach."',
      url: './programs',
      btn: 'Details',

    },
    {
      title: 'News',  
          imgUrl: '/assets/images/news.png',
          discription:'"Empowering communities through outreach."',
      url: './news',
      btn: 'Details',

    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
