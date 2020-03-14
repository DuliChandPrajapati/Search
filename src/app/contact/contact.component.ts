import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {

  constructor( private SpinnerService: NgxSpinnerService) { }

  
  ngOnInit() {
    this.SpinnerService.show();
    setTimeout(()=>{
    this.SpinnerService.hide();
    },300)
  }

}
