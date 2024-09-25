import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inmates-count-details',
  templateUrl: './inmates-count-details.page.html',
  styleUrls: ['./inmates-count-details.page.scss'],
})
export class InmatesCountDetailsPage implements OnInit {
  public detail_counts = [
    { title: 'Student Name:', answer: 'Archana', icon: 'person-outline' },
    { title: "Father's Name:", answer: 'Sundharam', icon: 'people-outline' },
    { title: "Mother's Name:", answer: 'Meena', icon: 'people-outline' },
    { title: 'Unique Id:', answer: '001', icon: 'id-card-outline' },
    { title: 'DOB:', answer: '04/05/2001', icon: 'calendar-outline' },
    { title: 'Address:', answer: 'Plot No:3, Vinayal Avenue, Okkiyam Pettai, Thoraipakkam, Kanchipuram-600097.', icon: 'location-outline' },
    { title: 'Home Location:', answer: 'Chennai', icon: 'home-outline' },
    { title: 'Age:', answer: '23', icon: 'person-add-outline' },
    { title: 'Join Date:', answer: '03/06/2017', icon: 'calendar-clear-outline' },
    { title: 'Releving Date:', answer: '27/04/2022', icon: 'calendar-clear-outline' },
    { title: 'Education Name:', answer: 'Bsc', icon: 'book-outline' },
    { title: 'Institution Name:', answer: 'SRM Univesity', icon: 'business-outline' },
    { title: 'Interest:', answer: 'Books Reading', icon: 'heart-circle-outline' },
  ];

  public marksheet = {
    title: 'Marksheet',
    answer: '/assets/images/marksheet.webp',
  };

  public achievements = [
    { title: 'Achievement (Education):', answer: 'Gold Medalist', image: '' },
    { title: 'Achievement (Others):', answer: 'Sports', image: '' }
  ];

  constructor() {}

  ngOnInit() {}

  // Handle achievement image upload
  onAchievementImageSelected(event: any, index: number) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.achievements[index].image = reader.result as string; // Set the uploaded image to the corresponding achievement
      };
      reader.readAsDataURL(file); // Convert image to Base64 format
    }
  }
}
