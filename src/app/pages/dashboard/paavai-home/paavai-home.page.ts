import { Component, OnInit } from '@angular/core';

export interface data {
  imgUrl: string;
 competition: string;
}
@Component({
  selector: 'app-paavai-home',
  templateUrl: './paavai-home.page.html',
  styleUrls: ['./paavai-home.page.scss'],
})
export class PaavaiHomePage implements OnInit {

  public home = [
    { 
      imgUrl:'/assets/images/chennai-home.png',
      competition:'Chennai Home',
      url: './chennai-home',

    },
    { 
      imgUrl:'/assets/images/coimbatore-home.jpeg',
      competition:'Coimbatore Home',
      url: './coimbatore-home',

    },
   
      ];
     
    
      constructor() {}
    
    
    
  ngOnInit() {
  }

}
