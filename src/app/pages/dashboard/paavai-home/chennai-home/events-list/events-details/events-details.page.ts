import { Component, OnInit } from '@angular/core';
import { IMAGES } from 'src/app/image-data';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.page.html',
  styleUrls: ['./events-details.page.scss'],
})
export class EventsDetailsPage implements OnInit {

  images = IMAGES;

  constructor() { }

  ngOnInit() {
  }

}
