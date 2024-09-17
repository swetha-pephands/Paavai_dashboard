import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  public cardIcons = [
   
    {
      title: 'Paavai Home',
      imgUrl: '/assets/images/home.png',
      discription: '"Your trusted partner for secure homes."      ',
      url: './paavai-home',
    },
    {
      title: 'Outreach Program',  
          imgUrl: '/assets/images/outreach-program.png',
          discription:'"Empowering communities through outreach."',
      url: './outreach-program',
    },
    {
      title: 'Medical Campaign',
      imgUrl: '/assets/images/medical.png',
      discription:'"Bringing healthcare to your doorstep."',
      url: './medical-campaign',
    },
    {
      title: 'Education Campaign',
      imgUrl: '/assets/images/education.png',
      discription:'"Empowering minds through education."',
      url: './education-campagins',
    },
    {
      title: 'Achivement',
      imgUrl: '/assets/images/achivement.webp',
      discription:'"Reaching new heights of success."',

      url: '/document-verification',
    },
    // {
    //   title: 'Marksheet',
    //   imgUrl: '/assets/images/marksheet.png',
    //   discription:'"Showcase your academic achievements."      ',

    //   url: './marksheet',
    // },
    {
      title: 'Enquiries',
      imgUrl: '/assets/images/contact us.png',
      discription:'"Reach out to us for any inquiries or support."      ',

      url: './contact-us',
    },
    {
      title: 'Volunteer',
      imgUrl: '/assets/images/volunteer.png',
      discription:'"Volunteer with us and make a difference."',

      url: './volunteer',
    },
    {
      title: 'Donation',
      imgUrl: '/assets/images/donation.png',
      discription:'"Support our cause with a donation today."      ',

      url: './donation',
    },
    {
      title: 'Subscribers',
      imgUrl: '/assets/images/subscribtion.png',
      discription:'"Subscribe now to stay updated."      ',

      url: './subscribtion',
    },
    
    {
      title: 'Performence',
      imgUrl: '/assets/images/perform.webp',
      discription:'"Visualizing performance metrics."     ',

      url: './performence',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
      this.router.navigate(['/login']);
    }
  }
}

