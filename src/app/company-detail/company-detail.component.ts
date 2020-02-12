import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.less']
})
export class CompanyDetailComponent implements OnInit {
  public companyData : any;
  constructor(private router:Router) { }

  ngOnInit() {
    if(history.state.navigationId == 1){
      this.companyData = JSON.parse(localStorage.getItem('currentState'));
    }else{
      localStorage.setItem('currentState', JSON.stringify(history.state));
      this.companyData  = history.state;
    }
    
  }

}
