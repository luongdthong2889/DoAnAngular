import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  _opened: boolean = false;
  
  _toggleSidebar() {
    this._opened = !this._opened;
  }
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

}
