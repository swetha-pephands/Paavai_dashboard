import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-staff-information-model',
  templateUrl: './staff-information-model.page.html',
  styleUrls: ['./staff-information-model.page.scss'],
})
export class StaffInformationModelPage implements OnInit {


    constructor(private modalController: ModalController) {}
  
    closeModal() {
      this.modalController.dismiss(); // Dismiss the modal
    }
  
    save() {
      // Implement save logic here, e.g., save form data to database or perform any action
      console.log('Save button clicked');
      this.closeModal(); // Example: Close modal after saving
    }
  ngOnInit(): void {
    
  }
  
  }
