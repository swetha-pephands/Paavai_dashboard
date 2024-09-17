import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-us-details',
  templateUrl: './contact-us-details.page.html',
  styleUrls: ['./contact-us-details.page.scss'],
})
export class ContactUsDetailsPage implements OnInit {

  public detail_contact = [
    { title: 'Name:', answer: 'Ram', icon: 'person-outline' },
    { title: 'Phone No:', answer: '9876543212', icon: 'call-outline' },
    { title: 'Email:', answer: 'ram@gmail.com', icon: 'mail-outline' },
    { title: 'Subject:', answer: 'Bsc', icon: 'calendar-outline' },
    { title: 'Message:', answer: 'Very very good, Maintenance is very good. Good approach for staffs in Coimbatore Paavai Foundation.', icon: 'chatbox-outline' }
  ];

  public status!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Get the status from the query params
    this.route.queryParams.subscribe(params => {
      this.status = params['status'] || 'incomplete'; // Default to 'incomplete'
    });
  }


 
}