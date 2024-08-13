import { Component, OnInit } from '@angular/core';

export interface Campaign {
 
  imgUrl: string;

}
@Component({
  selector: 'app-education-campagins',
  templateUrl: './education-campagins.page.html',
  styleUrls: ['./education-campagins.page.scss'],
})
export class EducationCampaginsPage implements OnInit {

  public data: Campaign[] = [
    {  imgUrl: '/assets/images/education.jpeg' },
    {  imgUrl: '/assets/images/education.jpeg' },
    {  imgUrl: '/assets/images/education.jpeg' },
    {  imgUrl: '/assets/images/education.jpeg' },
    {  imgUrl: '/assets/images/education.jpeg' },
    {  imgUrl: '/assets/images/education.jpeg' },
    {  imgUrl: '/assets/images/education.jpeg' },
    {  imgUrl: '/assets/images/education.jpeg' },
    {  imgUrl: '/assets/images/education.jpeg' },
    {  imgUrl: '/assets/images/education.jpeg' },
    {  imgUrl: '/assets/images/education.jpeg' },
    {  imgUrl: '/assets/images/education.jpeg' },


  ];

  public currentPage = 1;
  public itemsPerPage = 8; // Number of items per page
  public paginatedData: Campaign[] = [];

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

  seeMore(data: Campaign): void {
    console.log('See more clicked for:', data);
    // Implement your logic here for what happens when "See More" is clicked
  }
}



