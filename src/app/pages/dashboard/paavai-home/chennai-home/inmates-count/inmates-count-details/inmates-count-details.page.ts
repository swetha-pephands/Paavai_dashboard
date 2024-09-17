import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inmates-count-details',
  templateUrl: './inmates-count-details.page.html',
  styleUrls: ['./inmates-count-details.page.scss'],
})
export class InmatesCountDetailsPage implements OnInit {
public detail_counts = [
    { title: 'Student Name:', answer: 'Archana', icon: 'person-outline' },
    { title: "Father's Name:", answer: 'Sundharam', icon: 'people-outline' },
    { title: "Mother's Name:", answer: 'Meena', icon: 'people-outline' },

    { title: 'Unique Id:', answer: '001', icon: 'id-card-outline' },
    { title: 'DOB:', answer: '04/05/2001', icon: 'calendar-outline' },
    { title: 'Address:', answer: 'Plot No:3, Vinayal Avenue, Okkiyam Pettai, Thoraipakkam, Kanchipuram-600097.', icon: 'location-outline' },
    { title: 'Home Location:', answer: 'Chennai', icon: 'home-outline' },

    { title: 'Age:', answer: '23', icon: 'person-add-outline' },
    { title: 'Join Date:', answer: '03/06/2017', icon: 'calendar-clear-outline' },
    { title: 'Releving Date:', answer: '27/04/2022', icon: 'calendar-clear-outline' },
    { title: 'Education Name:', answer: 'Bsc', url: './inmates-count', icon: 'book-outline' },
    { title: 'Institution Name:', answer: 'SRM Univesity', url: '/home/dashboard', icon: 'business-outline' },
    { title: 'Intreast :', answer: 'Books Reading', url: '/home/dashboard', icon: 'heart-circle-outline' },
    { title: 'Achivement (Education):', answer: 'Gold Medalist', url: '/home/dashboard', icon: 'trophy-outline' },
    { title: 'Achivement (Others):', answer: 'sports', url: '/home/dashboard', icon: 'trophy-outline' },

  ];
  marksheet = {
    title: 'Marksheet',
    answer: '/assets/images/marksheet.webp',
    url: '/home/dashboard',
   
  };
  constructor() { }

  ngOnInit() {
  }

}
