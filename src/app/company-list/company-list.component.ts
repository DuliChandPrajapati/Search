import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SearchService } from '@app/_services';
import { NgxSpinnerService } from "ngx-spinner";  
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

  constructor(private router:Router, private _service:SearchService,
    private SpinnerService: NgxSpinnerService) {
   
   }

  ngOnInit() {
    this.SpinnerService.show();
    this._service.getAll()
        .pipe()
        .subscribe(
            compaies => {
                this.companylist = compaies['data'].data;
                this.SpinnerService.hide();
            },
            error => {
                this.error = error;
                this.SpinnerService.hide();
            });
  }

}
