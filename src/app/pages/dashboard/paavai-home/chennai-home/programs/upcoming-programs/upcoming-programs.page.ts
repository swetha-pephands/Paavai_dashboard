import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UpcomingProgramDetailsPage } from './upcoming-program-details/upcoming-program-details.page';

@Component({
  selector: 'app-upcoming-programs',
  templateUrl: './upcoming-programs.page.html',
  styleUrls: ['./upcoming-programs.page.scss'],
})
export class UpcomingProgramsPage implements OnInit {

  constructor(private modalController: ModalController) {}
  ngOnInit(): void {
  }

  async openModal() {
    const modal = await this.modalController.create({
      component:  UpcomingProgramDetailsPage, 
      componentProps: {
        // Optionally pass data to the modal component
      }
    });
    return await modal.present(); // Present the modal
  }


}
