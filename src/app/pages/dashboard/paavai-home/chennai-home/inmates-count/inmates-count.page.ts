import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AddInformationModalPage } from './add-information-modal/add-information-modal.page';

@Component({
  selector: 'app-inmates-count',
  templateUrl: './inmates-count.page.html',
  styleUrls: ['./inmates-count.page.scss'],
})
export class InmatesCountPage implements OnInit {
  counts = [
    { title: 'Archana', imgUrl: '/assets/images/girl-profile.jpg', url:'./inmates-count-details' },
    { title: 'Priya', imgUrl: '/assets/images/girl-profile.jpg' , url:'./inmates-count-details'},
    { title: 'Lakshmi', imgUrl: '/assets/images/girl-profile.jpg' , url:'./inmates-count-details'},
    { title: 'Archana', imgUrl: '/assets/images/girl-profile.jpg' },
    { title: 'Priya', imgUrl: '/assets/images/girl-profile.jpg' },
    { title: 'Lakshmi', imgUrl: '/assets/images/girl-profile.jpg' },
    { title: 'Archana', imgUrl: '/assets/images/girl-profile.jpg' },
    { title: 'Priya', imgUrl: '/assets/images/girl-profile.jpg' },
    { title: 'Lakshmi', imgUrl: '/assets/images/girl-profile.jpg' },
    // Add more events as needed
  ];
  constructor(private modalController: ModalController) {}
  ngOnInit(): void {
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: AddInformationModalPage, // Modal component to be opened
      componentProps: {
        // Optionally pass data to the modal component
      }
    });
    return await modal.present(); // Present the modal
  }

}
