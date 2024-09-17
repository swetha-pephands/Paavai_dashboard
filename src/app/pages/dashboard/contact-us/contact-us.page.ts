import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ContactUsFormPage } from './contact-us-form/contact-us-form.page';
import { Router } from '@angular/router';


// interface ContactItem {
//   src: string;
//   name: string;
 
//   url?: string;

// }
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {

 
  // items: ContactItem[] = [
  //   { src: '/assets/images/profile.png', name: 'priya', url:'./contact-us-details' },
  //   { src: '/assets/images/profile.png', name: 'ram',url:'./contact-us-details' },
  //   { src: '/assets/images/profile.png', name: 'saravanan', url:'./contact-us-details' },
  //   { src: '/assets/images/profile.png', name: 'tamil', },
  //   { src: '/assets/images/profile.png', name: 'swetha',},
  //   { src: '/assets/images/profile.png', name: 'komathi',  },
  //   { src: '/assets/images/profile.png', name: 'rajini',  },
  //   { src: '/assets/images/profile.png', name: 'fayas', },
  //   { src: '/assets/images/profile.png', name: 'ramya',  },
  //   { src: '/assets/images/profile.png', name: 'priya',  },
  //   { src: '/assets/images/profile.png', name: 'ram', },
  //   { src: '/assets/images/profile.png', name: 'saravanan',},
  //   { src: '/assets/images/profile.png', name: 'tamil',  },
  //   { src: '/assets/images/profile.png', name: 'swetha',},
  //   { src: '/assets/images/profile.png', name: 'komathi',},
  //   // Add more items as needed
  // ];
  // public currentPage = 1;
  // public itemsPerPage = 9; // Number of items per page
  // public paginatedData: ContactItem[] = [];

  // constructor(private modalController: ModalController) {}
  // ngOnInit() {
  //   this.updatePagination();
  // }

  // async openModal() {
  //   const modal = await this.modalController.create({
  //     component: ContactUsFormPage, // Modal component to be opened
  //     componentProps: {
  //       // Optionally pass data to the modal component
  //     }
  //   });
  //   return await modal.present(); // Present the modal
  // }

  // // Update paginated data based on current page
  // updatePagination() {
  //   const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  //   const endIndex = startIndex + this.itemsPerPage;
  //   this.paginatedData = this.items.slice(startIndex, endIndex);
  // }

  // // Set the current page and update pagination
  // setPage(pageNumber: number): void {
  //   this.currentPage = pageNumber;
  //   this.updatePagination();
  // }

  // // Calculate the range of pages for pagination
  // get paginationRange(): number[] {
  //   const totalPages = Math.ceil(this.items.length / this.itemsPerPage);
  //   return Array.from({ length: totalPages }, (_, i) => i + 1);
  // }

  // seeMore(data: ContactItem): void {
  //   console.log('See more clicked for:', data);
  //   // Implement your logic here for what happens when "See More" is clicked
  // }

 
  public calls = [
    { name: 'John Doe', status: 'complete',url:'./contact-us-details'},
    { name: 'Jane Smith', status: 'incomplete',url:'./contact-us-details'},
    { name: 'Michael Brown', status: 'complete', url:'./contact-us-details'},
    { name: 'Emily Davis', status: 'incomplete', url:'./contact-us-details' },
    { name: 'David Wilson', status: 'complete',url:'./contact-us-details' }
  ];

  constructor(private router: Router) {}

  // goToDetails(callId: number) {
  //   this.router.navigate(['./contact-us-details', callId]);
  // }


  
  ngOnInit(): void {
    
  }
}