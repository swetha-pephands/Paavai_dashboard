import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StaffInformationModelPage } from './staff-information-model/staff-information-model.page';

@Component({
  selector: 'app-staff-count',
  templateUrl: './staff-count.page.html',
  styleUrls: ['./staff-count.page.scss'],
})
export class StaffCountPage implements OnInit {
  counts = [
    { title: 'Archana', imgUrl: '/assets/images/staff.jpg', url:'./staff-count-details' },
    { title: 'Priya', imgUrl: '/assets/images/staff.jpg' , url:'./staff-count-details'},
    { title: 'Lakshmi', imgUrl: '/assets/images/staff.jpg' , url:'./staff-count-details'},
    { title: 'Archana', imgUrl: '/assets/images/staff.jpg' },
    { title: 'Priya', imgUrl: '/assets/images/staff.jpg' },
    { title: 'Lakshmi', imgUrl: '/assets/images/staff.jpg' },
    { title: 'Archana', imgUrl: '/assets/images/staff.jpg' },
    { title: 'Priya', imgUrl: '/assets/images/staff.jpg' },
    { title: 'Lakshmi', imgUrl: '/assets/images/staff.jpg' },
    // Add more events as needed
  ];
  constructor(private modalController: ModalController) {}
  ngOnInit(): void {
  }

  async openModal() {
    const modal = await this.modalController.create({
      component:  StaffInformationModelPage, // Modal component to be opened
      componentProps: {
        // Optionally pass data to the modal component
      }
    });
    return await modal.present(); // Present the modal
  }


}
