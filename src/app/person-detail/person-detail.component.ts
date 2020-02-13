import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.less']
})
export class PersonDetailComponent implements OnInit {
public personData : any;
constructor(private router:Router) { }

  ngOnInit() {
    if(history.state.navigationId == 1){
      this.personData = JSON.parse(localStorage.getItem('personState'));
    }else{
      localStorage.setItem('personState', JSON.stringify(history.state));
      this.personData  = history.state;
    }
  }

}
