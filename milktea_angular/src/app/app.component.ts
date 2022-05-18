import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public router:Router){

  }
  title = 'milktea_angular';
  scrollToTop(){
    const element = document.getElementById("header")
    element?.scrollIntoView({behavior:"smooth"});
  }
}
