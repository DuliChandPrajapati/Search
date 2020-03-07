import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SearchService } from '@app/_services';
@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.less']
})
export class CompanyListComponent implements OnInit {

  public companylist : Array<any>;
  public companylistData;
  public totalRec;
  page: number = 1;
  loading = false;
  error = '';

  constructor(private router:Router, private _service:SearchService) {
   
   }

  ngOnInit() {
    this.loading = true;
    this._service.getAll()
        .pipe()
        .subscribe(
            compaies => {
                this.companylist = compaies['data'].data;
            },
            error => {
                this.error = error;
                this.loading = false;
            });
  }

}
