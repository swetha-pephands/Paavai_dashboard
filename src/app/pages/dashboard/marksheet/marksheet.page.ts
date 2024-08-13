import { Component, OnInit } from '@angular/core';

export interface Marksheet {
  imgUrl: string;
}

@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.page.html',
  styleUrls: ['./marksheet.page.scss'],
})
export class MarksheetPage implements OnInit {

  public data: Marksheet[] = [
    { imgUrl: '/assets/images/marksheet.webp' },
    { imgUrl: '/assets/images/marksheet.webp' },
    { imgUrl: '/assets/images/marksheet.webp' },
    { imgUrl: '/assets/images/marksheet.webp' },
    { imgUrl: '/assets/images/marksheet.webp' },
    { imgUrl: '/assets/images/marksheet.webp' },
    { imgUrl: '/assets/images/marksheet.webp' },
    { imgUrl: '/assets/images/marksheet.webp' },
    { imgUrl: '/assets/images/marksheet.webp' },
    { imgUrl: '/assets/images/marksheet.webp' },
    { imgUrl: '/assets/images/marksheet.webp' },
    { imgUrl: '/assets/images/marksheet.webp' },
    { imgUrl: '/assets/images/marksheet.webp' },
    { imgUrl: '/assets/images/marksheet.webp' },
    { imgUrl: '/assets/images/marksheet.webp' },
    // Add more items as needed
  ];

  public currentPage = 1;
  public itemsPerPage = 8; // Number of items per page
  public paginatedData: Marksheet[] = [];

  ngOnInit() {
    this.updatePagination();
  }

  // Update paginated data based on current page
  updatePagination() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedData = this.data.slice(startIndex, endIndex);
  }

  // Set the current page and update pagination
  setPage(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.updatePagination();
  }

  // Calculate the range of pages for pagination
  get paginationRange(): number[] {
    const totalPages = Math.ceil(this.data.length / this.itemsPerPage);
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  seeMore(data: Marksheet): void {
    console.log('See more clicked for:', data);
    // Implement your logic here for what happens when "See More" is clicked
  }
}
