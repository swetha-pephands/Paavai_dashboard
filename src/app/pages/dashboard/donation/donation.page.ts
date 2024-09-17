import { Component, OnInit } from '@angular/core';
interface DonationItem {
  name: string;
  phoneNumber: string;
  amount: number;
  date: Date;
  status: string;
}

@Component({
  selector: 'app-donation',
  templateUrl: './donation.page.html',
  styleUrls: ['./donation.page.scss'],
})
export class DonationPage implements OnInit {

  public items: DonationItem[] = [
    { name: 'John Doe', phoneNumber: '9876543210', amount: 500, date: new Date('2024-09-01'), status: 'Completed' },
    { name: 'Jane Smith', phoneNumber: '1234567890', amount: 300, date: new Date('2024-08-15'), status: 'Incomplete' },
    { name: 'Michael Brown', phoneNumber: '2345678901', amount: 700, date: new Date('2024-08-25'), status: 'Initiated' },
    { name: 'Emily Davis', phoneNumber: '3456789012', amount: 400, date: new Date('2024-07-20'), status: 'Completed' },
    { name: 'David Wilson', phoneNumber: '4567890123', amount: 250, date: new Date('2024-06-10'), status: 'Incomplete' },
    { name: 'John Doe', phoneNumber: '9876543210', amount: 500, date: new Date('2024-09-01'), status: 'Completed' },
    { name: 'Jane Smith', phoneNumber: '1234567890', amount: 300, date: new Date('2024-08-15'), status: 'Incomplete' },
    { name: 'Michael Brown', phoneNumber: '2345678901', amount: 700, date: new Date('2024-08-25'), status: 'Initiated' },
    { name: 'Emily Davis', phoneNumber: '3456789012', amount: 400, date: new Date('2024-07-20'), status: 'Completed' },
    { name: 'David Wilson', phoneNumber: '4567890123', amount: 250, date: new Date('2024-06-10'), status: 'Incomplete' } ,
     { name: 'John Doe', phoneNumber: '9876543210', amount: 500, date: new Date('2024-09-01'), status: 'Completed' },
    { name: 'Jane Smith', phoneNumber: '1234567890', amount: 300, date: new Date('2024-08-15'), status: 'Incomplete' },
    { name: 'Michael Brown', phoneNumber: '2345678901', amount: 700, date: new Date('2024-08-25'), status: 'Initiated' },
    { name: 'Emily Davis', phoneNumber: '3456789012', amount: 400, date: new Date('2024-07-20'), status: 'Completed' },
    { name: 'David Wilson', phoneNumber: '4567890123', amount: 250, date: new Date('2024-06-10'), status: 'Incomplete' } ,
     { name: 'John Doe', phoneNumber: '9876543210', amount: 500, date: new Date('2024-09-01'), status: 'Completed' },
    { name: 'Jane Smith', phoneNumber: '1234567890', amount: 300, date: new Date('2024-08-15'), status: 'Incomplete' },
    { name: 'Michael Brown', phoneNumber: '2345678901', amount: 700, date: new Date('2024-08-25'), status: 'Initiated' },
    { name: 'Emily Davis', phoneNumber: '3456789012', amount: 400, date: new Date('2024-07-20'), status: 'Completed' },
    { name: 'David Wilson', phoneNumber: '4567890123', amount: 250, date: new Date('2024-06-10'), status: 'Incomplete' } ,
     { name: 'John Doe', phoneNumber: '9876543210', amount: 500, date: new Date('2024-09-01'), status: 'Completed' },
    { name: 'Jane Smith', phoneNumber: '1234567890', amount: 300, date: new Date('2024-08-15'), status: 'Incomplete' },
    { name: 'Michael Brown', phoneNumber: '2345678901', amount: 700, date: new Date('2024-08-25'), status: 'Initiated' },
    { name: 'Emily Davis', phoneNumber: '3456789012', amount: 400, date: new Date('2024-07-20'), status: 'Completed' },
    { name: 'David Wilson', phoneNumber: '4567890123', amount: 250, date: new Date('2024-06-10'), status: 'Incomplete' }
  ];

  // Properties for the filters and pagination
  public paginatedItems: DonationItem[] = [];
  public selectedStatus: string = '';
  public selectedDate: string = '';
  public startDate: string | null = null;
  public endDate: string | null = null;
  public currentPage: number = 1;
  public itemsPerPage: number = 15;
  public totalPages: number[] = [];

  constructor() { }

  ngOnInit() {
    this.updatePagination();
    this.filterData();
  }

  // Method to filter data based on selected status and date
  filterData() {
    let filteredItems = this.items;

    // Filter by status
    if (this.selectedStatus) {
      filteredItems = filteredItems.filter(item => item.status === this.selectedStatus);
    }

    // Filter by date range
    const today = new Date();
    if (this.selectedDate === 'Today') {
      filteredItems = filteredItems.filter(item => this.isSameDay(item.date, today));
    } else if (this.selectedDate === 'Last Week') {
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(today.getDate() - 7);
      filteredItems = filteredItems.filter(item => item.date >= oneWeekAgo && item.date <= today);
    } else if (this.selectedDate === 'Last Month') {
      const oneMonthAgo = new Date();
      oneMonthAgo.setMonth(today.getMonth() - 1);
      filteredItems = filteredItems.filter(item => item.date >= oneMonthAgo && item.date <= today);
    } else if (this.selectedDate === 'Custom' && this.startDate && this.endDate) {
      const start = new Date(this.startDate);
      const end = new Date(this.endDate);
      filteredItems = filteredItems.filter(item => item.date >= start && item.date <= end);
    }

    // Update pagination with filtered items
    this.paginatedItems = this.paginate(filteredItems);
    this.updatePagination();
  }

  // Helper method to check if two dates are the same day
  private isSameDay(date1: Date, date2: Date): boolean {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
  }

  // Method to handle pagination
  private paginate(items: DonationItem[]): DonationItem[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return items.slice(startIndex, startIndex + this.itemsPerPage);
  }

  // Method to update pagination details
  private updatePagination() {
    const totalItems = this.items.length;
    const totalPages = Math.ceil(totalItems / this.itemsPerPage);
    this.totalPages = Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // Method to handle page changes
  setPage(page: number) {
    this.currentPage = page;
    this.filterData();
  }

  // Method to reset all filters
  resetFilters() {
    this.selectedStatus = '';
    this.selectedDate = '';
    this.startDate = null;
    this.endDate = null;
    this.filterData(); // Refresh data with no filters applied
  }
}
