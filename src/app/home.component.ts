import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from './carousel.component';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { AppComponent } from './app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
      private router: Router,
      private route: ActivatedRoute,
private location: Location
  ) { }

  ngOnInit() {
  }

  gotoEvent(){
    this.router.navigateByUrl('/events');

  }
  goBack(): void {
  this.location.back();
}

}
