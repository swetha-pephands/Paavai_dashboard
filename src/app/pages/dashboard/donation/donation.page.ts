import { Component, OnInit } from '@angular/core';

interface TableItem {
  name: string;
  phoneNumber: string;
  amount: number;
  date: string;
}
@Component({
  selector: 'app-donation',
  templateUrl: './donation.page.html',
  styleUrls: ['./donation.page.scss'],
})
export class DonationPage implements OnInit {

  items: TableItem[] = [
    { name: 'Ramya', phoneNumber: '123-456-7890', amount: 5000, date: '2024-08-01' },
    { name: 'Priya', phoneNumber: '234-567-8901', amount: 1000, date: '2024-08-02' },
    { name: 'Swathi', phoneNumber: '345-678-9012', amount: 2000, date: '2024-08-03' },
    { name: 'Ramya', phoneNumber: '123-456-7890', amount: 5000, date: '2024-08-01' },
    { name: 'Priya', phoneNumber: '234-567-8901', amount: 1000, date: '2024-08-02' },
    { name: 'Swathi', phoneNumber: '345-678-9012', amount: 2000, date: '2024-08-03' },
    { name: 'Ramya', phoneNumber: '123-456-7890', amount: 5000, date: '2024-08-01' },
    { name: 'Priya', phoneNumber: '234-567-8901', amount: 1000, date: '2024-08-02' },
    { name: 'Swathi', phoneNumber: '345-678-9012', amount: 2000, date: '2024-08-03' },
    { name: 'Ramya', phoneNumber: '123-456-7890', amount: 5000, date: '2024-08-01' },
    { name: 'Priya', phoneNumber: '234-567-8901', amount: 1000, date: '2024-08-02' },
    { name: 'Swathi', phoneNumber: '345-678-9012', amount: 2000, date: '2024-08-03' },
    { name: 'Ramya', phoneNumber: '123-456-7890', amount: 5000, date: '2024-08-01' },
    { name: 'Priya', phoneNumber: '234-567-8901', amount: 1000, date: '2024-08-02' },
    { name: 'Swathi', phoneNumber: '345-678-9012', amount: 2000, date: '2024-08-03' },
    { name: 'Ramya', phoneNumber: '123-456-7890', amount: 5000, date: '2024-08-01' },
    { name: 'Priya', phoneNumber: '234-567-8901', amount: 1000, date: '2024-08-02' },
    { name: 'Swathi', phoneNumber: '345-678-9012', amount: 2000, date: '2024-08-03' },
    { name: 'Ramya', phoneNumber: '123-456-7890', amount: 5000, date: '2024-08-01' },
    { name: 'Priya', phoneNumber: '234-567-8901', amount: 1000, date: '2024-08-02' },
    { name: 'Swathi', phoneNumber: '345-678-9012', amount: 2000, date: '2024-08-03' },
    { name: 'Ramya', phoneNumber: '123-456-7890', amount: 5000, date: '2024-08-01' },
    { name: 'Priya', phoneNumber: '234-567-8901', amount: 1000, date: '2024-08-02' },
    { name: 'Swathi', phoneNumber: '345-678-9012', amount: 2000, date: '2024-08-03' },
    { name: 'Ramya', phoneNumber: '123-456-7890', amount: 5000, date: '2024-08-01' },
    { name: 'Priya', phoneNumber: '234-567-8901', amount: 1000, date: '2024-08-02' },
    { name: 'Swathi', phoneNumber: '345-678-9012', amount: 2000, date: '2024-08-03' },
    { name: 'Ramya', phoneNumber: '123-456-7890', amount: 5000, date: '2024-08-01' },
    { name: 'Priya', phoneNumber: '234-567-8901', amount: 1000, date: '2024-08-02' },
    { name: 'Swathi', phoneNumber: '345-678-9012', amount: 2000, date: '2024-08-03' },
    { name: 'Ramya', phoneNumber: '123-456-7890', amount: 5000, date: '2024-08-01' },
    { name: 'Priya', phoneNumber: '234-567-8901', amount: 1000, date: '2024-08-02' },
    { name: 'Swathi', phoneNumber: '345-678-9012', amount: 2000, date: '2024-08-03' },
  ];
  currentPage = 1;
  itemsPerPage = 25;
  paginatedItems: TableItem[] = [];

  ngOnInit() {
    this.updatePagination();
  }

  updatePagination() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedItems = this.items.slice(startIndex, endIndex);
  }

  setPage(page: number) {
    this.currentPage = page;
    this.updatePagination();
  }

  get totalPages(): number[] {
    return Array(Math.ceil(this.items.length / this.itemsPerPage)).fill(0).map((x, i) => i + 1);
  }
}
