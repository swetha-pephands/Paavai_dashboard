import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public folder!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    public platform: Platform
  ) {}

  get largeScreen(): boolean {
    return +this.platform?.width() > 992;
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
