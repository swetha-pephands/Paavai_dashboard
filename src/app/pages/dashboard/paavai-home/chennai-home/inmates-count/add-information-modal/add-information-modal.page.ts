import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-information-modal',
  templateUrl: './add-information-modal.page.html',
  styleUrls: ['./add-information-modal.page.scss'],
})
export class AddInformationModalPage implements OnInit {

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
