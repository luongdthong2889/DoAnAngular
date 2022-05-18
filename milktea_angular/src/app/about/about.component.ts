import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  tabOne:any;
  tabTwo:any;
  tabThree:any;
  ngOnInit(): void {
    this.tabOne='block';
  }
  tab1(){
    if(this.tabOne=='block')
    {
      this.tabOne='none';
    }
    else
    {
      this.tabOne='block';
    }
    this.tabTwo='none';
    this.tabThree='none';
  }
  tab2(){
    this.tabOne='none';
    if(this.tabTwo=='block')
    {
      this.tabTwo='none';
    }
    else
    {
      this.tabTwo='block';
    }
    this.tabThree='none';
  }
  tab3(){
    this.tabOne='none';
    this.tabTwo='none';
    if(this.tabThree=='block')
    {
      this.tabThree='none';
    }
    else
    {
      this.tabThree='block';
    }
  }

}
