import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  onContact(){
    this.toastr.success('Tin nhắn của bạn đã được gửi','Thành Công')
  }
}
