import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-count-details',
  templateUrl: './staff-count-details.page.html',
  styleUrls: ['./staff-count-details.page.scss'],
})
export class StaffCountDetailsPage implements OnInit {
  public detail_counts = [
      { title: 'Staff Name:', answer: 'Archana', icon: 'person-outline' },
      { title: 'Staff Address:', answer: 'Plot No:3, Vinayal Avenue, Okkiyam Pettai, Thoraipakkam, Kanchipuram-600097.', icon: 'location-outline' },
      { title: 'Phone Number:', answer: '9876543432', icon: 'call-outline' },
      { title: 'Email:', answer: '23', icon: 'mail-outline' },
      { title: 'Gender:', answer: 'Female', icon: 'man-outline' },
      { title: 'Home Location:', answer: 'Chennai', icon: 'home-outline' },

      { title: 'Age:', answer: '23', icon: 'person-add-outline' },
      { title: 'Designation:', answer: 'Teacher', icon: 'ribbon-outline' },

      { title: 'Join Date:', answer: '03/06/2017', icon: 'calendar-clear-outline' },
      { title: 'Releving Date:', answer: '27/04/2022', icon: 'calendar-clear-outline' },
      { title: 'Aadhar Number:', answer: '0978 6543 3456', url: './inmates-count', icon: 'card-outline' },

  
    ];
  constructor() { }

  ngOnInit() {
  }

}
