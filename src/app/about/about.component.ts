import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

  constructor( private SpinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.SpinnerService.show();
    setTimeout(()=>{
    this.SpinnerService.hide();
    },300)
  }

 

}
