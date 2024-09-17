import { Component, OnInit } from '@angular/core';

export interface news {
  imgUrl: string;
}
@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  public data: news[] = [
    { imgUrl: '/assets/images/news-paper.webp' },
    { imgUrl: '/assets/images/news-paper.webp' },
    { imgUrl: '/assets/images/news-paper.webp' },
    { imgUrl: '/assets/images/news-paper.webp' },
    { imgUrl: '/assets/images/news-paper.webp' },
    { imgUrl: '/assets/images/news-paper.webp' },
    { imgUrl: '/assets/images/news-paper.webp' },
    { imgUrl: '/assets/images/news-paper.webp' },
    { imgUrl: '/assets/images/news-paper.webp' },
    { imgUrl: '/assets/images/news-paper.webp' },
    { imgUrl: '/assets/images/news-paper.webp' },
    { imgUrl: '/assets/images/news-paper.webp' },
    { imgUrl: '/assets/images/news-paper.webp' },
    { imgUrl: '/assets/images/news-paper.webp' },
    { imgUrl: '/assets/images/news-paper.webp' },
    { imgUrl: '/assets/images/news-paper.webp' },
    // Add more items as needed
  ];


  public currentPage = 1;
  public itemsPerPage = 8; // Number of items per page
  public paginatedData: news[] = [];

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

  seeMore(data: news): void {
    console.log('See more clicked for:', data);
    // Implement your logic here for what happens when "See More" is clicked
  }
}
