import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OurEventFormsPage } from './our-event-forms/our-event-forms.page';

interface DropdownOption {
  placeholder: string;
  options: string[];
  selectedOption?: string;
}

interface ImageSet {
  [key: string]: { src: string, alt: string, date: string }[]; // Add a date field for filtering by date range
}

@Component({
  selector: 'app-our-events',
  templateUrl: './our-events.page.html',
  styleUrls: ['./our-events.page.scss'],
})
export class OurEventsPage implements OnInit {
  allImages: { src: string, alt: string, date: string }[] = [];
  images: { src: string, alt: string, date: string }[] = [];
  dropdowns: DropdownOption[] = [
    { placeholder: 'Indicators', options: ['Indicators 1', 'Indicators 2', 'Indicators 3', 'Indicators 4', 'Indicators 5', 'Indicators 6', 'Indicators 7', 'Indicators 8', 'Indicators 9', 'Indicators 10', 'Indicators 11', 'Indicators 12', 'Indicators 13', 'Indicators 14'] },
    { placeholder: 'Districts', options: ['district 1', 'district 2', 'district 3'] },
    { placeholder: 'Date', options: ['Today', 'Yesterday', 'Last week', 'Last month', 'Custom'] },
    { placeholder: 'Co-ordinators', options: ['Option 1', 'Option 2', 'Option 3'] },
  ];
  showCustomDateRange = false;
  startDate: string = '';
  endDate: string = '';

  imageSets: ImageSet = {
    'Indicators 1': [
      { src: '/assets/images/pongal.jpg', alt: 'Option 1 Image 1', date: '2024-01-01' },
      { src: '/assets/images/pongal.jpg', alt: 'Option 1 Image 2', date: '2024-01-01' },
    ],
    'Indicators 2': [
      { src: '/assets/images/ramzon.jpg', alt: 'Option 2 Image 1', date: '2024-02-01' },
      { src: '/assets/images/ramzon.jpg', alt: 'Option 2 Image 2', date: '2024-02-01' },
    ],
    'Indicators 3': [
      { src: '/assets/images/medical.jpg', alt: 'Option 3 Image 1', date: '2024-03-01' },
      { src: '/assets/images/medical.jpg', alt: 'Option 3 Image 2', date: '2024-03-01' },
    ],
    'Indicators 4': [
      { src: '/assets/images/christmas.jpg', alt: 'Option 4 Image 1', date: '2024-04-01' },
      { src: '/assets/images/christmas.jpg', alt: 'Option 4 Image 2', date: '2024-04-01' },
    ],
    'Indicators 5': [
      { src: '/assets/images/waterday.jpeg', alt: 'Option 5 Image 1', date: '2024-05-01' },
      { src: '/assets/images/waterday.jpeg', alt: 'Option 5 Image 2', date: '2024-05-01' },
    ],
    'district 1': [
      { src: '/assets/images/pongal.jpg', alt: 'District 1 Image 1', date: '2024-06-01' },
      { src: '/assets/images/pongal.jpg', alt: 'District 1 Image 2', date: '2024-06-01' },
    ],
    'district 2': [
      { src: '/assets/images/medical.jpg', alt: 'District 2 Image 1', date: '2024-07-01' },
      { src: '/assets/images/medical.jpg', alt: 'District 2 Image 2', date: '2024-07-01' },
    ],
    'district 3': [
      { src: '/assets/images/christmas.jpg', alt: 'District 3 Image 1', date: '2024-08-01' },
      { src: '/assets/images/christmas.jpg', alt: 'District 3 Image 2', date: '2024-08-01' },
    ],
  };

  lastSelectedDropdown: string = '';
  lastSelectedOption: string = '';

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    this.allImages = this.getAllImages(); // Initialize with all images
    this.images = [...this.allImages]; // Show all images initially
  }

  getAllImages(): { src: string, alt: string, date: string }[] {
    return Object.values(this.imageSets).reduce((acc, images) => acc.concat(images), []);
  }

  onDropdownChange(event: any, index: number) {
    const selectedOption = event.detail.value;
    this.dropdowns[index].selectedOption = selectedOption;
    this.lastSelectedDropdown = this.dropdowns[index].placeholder;
    this.lastSelectedOption = selectedOption;

    if (this.dropdowns[index].placeholder === 'Date' && selectedOption === 'Custom') {
      this.showCustomDateRange = true;
    } else if (this.dropdowns[index].placeholder === 'Date') {
      this.showCustomDateRange = false;
    }

    this.updateImages(); // Update images based on current selection
  }

  updateImages() {
    const indicatorsSelected = this.dropdowns.find(dropdown => dropdown.placeholder === 'Indicators' && dropdown.selectedOption);
    const districtsSelected = this.dropdowns.find(dropdown => dropdown.placeholder === 'Districts' && dropdown.selectedOption);
    const dateSelected = this.dropdowns.find(dropdown => dropdown.placeholder === 'Date' && dropdown.selectedOption);

    let filteredImages: { src: string, alt: string, date: string }[] = [...this.allImages];

    if (indicatorsSelected) {
      filteredImages = this.imageSets[indicatorsSelected.selectedOption!] || [];
    }

    if (districtsSelected) {
      filteredImages = this.imageSets[districtsSelected.selectedOption!] || [];
    }

    if (dateSelected && dateSelected.selectedOption !== 'Custom') {
      const today = new Date();
      let startDate = today;
      let endDate = today;

      switch (dateSelected.selectedOption) {
        case 'Today':
          startDate = new Date(today.setHours(0, 0, 0, 0));
          endDate = new Date(today.setHours(23, 59, 59, 999));
          break;
        case 'Yesterday':
          startDate = new Date(today.setDate(today.getDate() - 1));
          endDate = new Date(today.setHours(23, 59, 59, 999));
          break;
        case 'Last week':
          startDate = new Date(today.setDate(today.getDate() - 7));
          endDate = new Date();
          break;
        case 'Last month':
          startDate = new Date(today.setMonth(today.getMonth() - 1));
          endDate = new Date();
          break;
      }

      filteredImages = filteredImages.filter(image => {
        const imageDate = new Date(image.date);
        return imageDate >= startDate && imageDate <= endDate;
      });
    } else if (this.showCustomDateRange && this.startDate && this.endDate) {
      const startDate = new Date(this.startDate);
      const endDate = new Date(this.endDate);
      filteredImages = filteredImages.filter(image => {
        const imageDate = new Date(image.date);
        return imageDate >= startDate && imageDate <= endDate;
      });
    }

    this.images = filteredImages;
  }

  resetFilters() {
    this.dropdowns.forEach(dropdown => dropdown.selectedOption = undefined);
    this.startDate = '';
    this.endDate = '';
    this.showCustomDateRange = false;
    this.images = [...this.allImages]; // Refresh images to show all
  }
  async openModal() {
    const modal = await this.modalController.create({
      component: OurEventFormsPage, // Modal component to be opened
      componentProps: {
        // Optionally pass data to the modal component
      }
    });
    return await modal.present(); // Present the modal
  }

}
