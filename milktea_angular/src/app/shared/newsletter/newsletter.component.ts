import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {
  emailText:string;
  constructor(private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  onEmailChange()
  {
    console.log(this.emailText)
  }
  onCheckEmail(){
    if(this.emailText!=null){
      return true
    }
    else
    {
      return false
    }
  }
  onSubscribe(){
  
    if(this.emailText!=null)
    {
      this.emailText='';
      this.toastr.success('News Letter will send to you soon','Subscribe Success');
    }
    else
    {
      
      this.toastr.error('Enter your email','Subscribe Fail')
    }
  }
}
