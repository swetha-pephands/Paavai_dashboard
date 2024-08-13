import { Component, OnInit } from '@angular/core';
import { VolunteerFormModalPage } from './volunteer-form-modal/volunteer-form-modal.page';
import { ModalController } from '@ionic/angular';

interface CardItem {
  src: string;
  name: string;
  location: string;
  url?: string;

}
@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.page.html',
  styleUrls: ['./volunteer.page.scss'],
})
export class VolunteerPage implements OnInit {
 
  items: CardItem[] = [
    { src: '/assets/images/profile.png', name: 'priya', location: 'Location 1', url:'./volunteer-details' },
    { src: '/assets/images/profile.png', name: 'ram', location: 'Location 2',url:'./volunteer-details' },
    { src: '/assets/images/profile.png', name: 'saravanan', location: 'Location 3',url:'./volunteer-details' },
    { src: '/assets/images/profile.png', name: 'tamil', location: 'Location 4' },
    { src: '/assets/images/profile.png', name: 'swetha', location: 'Location 5' },
    { src: '/assets/images/profile.png', name: 'komathi', location: 'Location 6' },
    { src: '/assets/images/profile.png', name: 'rajini', location: 'Location 7' },
    { src: '/assets/images/profile.png', name: 'fayas', location: 'Location 8' },
    { src: '/assets/images/profile.png', name: 'ramya', location: 'Location 9' },
    { src: '/assets/images/profile.png', name: 'priya', location: 'Location 1' },
    { src: '/assets/images/profile.png', name: 'ram', location: 'Location 2' },
    { src: '/assets/images/profile.png', name: 'saravanan', location: 'Location 3' },
    { src: '/assets/images/profile.png', name: 'tamil', location: 'Location 4' },
    { src: '/assets/images/profile.png', name: 'swetha', location: 'Location 5' },
    { src: '/assets/images/profile.png', name: 'komathi', location: 'Location 6' },
    // Add more items as needed
  ];
  public currentPage = 1;
  public itemsPerPage = 9; // Number of items per page
  public paginatedData: CardItem[] = [];

  constructor(private modalController: ModalController) {}
  ngOnInit() {
    this.updatePagination();
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: VolunteerFormModalPage, // Modal component to be opened
      componentProps: {
        // Optionally pass data to the modal component
      }
    });
    return await modal.present(); // Present the modal
  }

  // Update paginated data based on current page
  updatePagination() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedData = this.items.slice(startIndex, endIndex);
  }

  // Set the current page and update pagination
  setPage(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.updatePagination();
  }

  // Calculate the range of pages for pagination
  get paginationRange(): number[] {
    const totalPages = Math.ceil(this.items.length / this.itemsPerPage);
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  seeMore(data: CardItem): void {
    console.log('See more clicked for:', data);
    // Implement your logic here for what happens when "See More" is clicked
  }
}