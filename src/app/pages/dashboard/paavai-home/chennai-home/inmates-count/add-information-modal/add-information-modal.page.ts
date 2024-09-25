import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-information-modal',
  templateUrl: './add-information-modal.page.html',
  styleUrls: ['./add-information-modal.page.scss'],
})
export class AddInformationModalPage implements OnInit {

  // Object to store the selected images for achievements
  achievementImages = {
    education: '',
    others: ''
  };

  constructor(private modalController: ModalController) {}

  ngOnInit(): void {}

  closeModal() {
    this.modalController.dismiss(); // Dismiss the modal
  }

  save() {
    // Implement save logic here, e.g., save form data to database or perform any action
    console.log('Save button clicked');
    console.log('Achievement Images:', this.achievementImages); // Log selected images
    this.closeModal(); // Example: Close modal after saving
  }

  // Method to handle image selection for achievements
  onAchievementImageSelected(event: any, achievementType: 'education' | 'others') {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.achievementImages[achievementType] = reader.result as string; // Store the image as Base64
      };
      reader.readAsDataURL(file); // Convert image to Base64
    }
  }
}
