import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volunteer-details',
  templateUrl: './volunteer-details.page.html',
  styleUrls: ['./volunteer-details.page.scss'],
})
export class VolunteerDetailsPage implements OnInit {
  public detail_volunteer = [
    { title: ' Name:', answer: 'Ram', icon: 'person-outline' },
    { title: 'Phone No:', answer: '9876543212', icon: 'call-outline' },
    { title: 'Email:', answer: 'ram@gmail.com', icon: 'mail-outline' },
    { title: 'DOB:', answer: '04/05/2001', icon: 'calendar-outline' },
    { title: 'Location:', answer: 'Chennai', icon: 'location-outline' },

   
   
  ];

  constructor() { }

  ngOnInit() {
  }

}
