import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { PersonService, ArticleService, SearchService } from '@app/_services';
import { forkJoin } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.less']
})
export class CompanyDetailComponent implements OnInit {
  public companyData: any;
  public totalRec;
  page: number = 1;
  public personList: Array<any>;
  public companyArticle: Array<any>;
  companylist;
  loading;
  error = '';
  lastsegment;
  constructor(private router: Router, private _service: SearchService,
    private _Pservice: PersonService,
    private _Aservice: ArticleService,
    private SpinnerService: NgxSpinnerService) {

  }

  ngOnInit() {
    this.SpinnerService.show();
    var array = this.router.url.split('/');
    this.lastsegment = array[array.length - 1];
    this._service.getById(this.lastsegment)
      .pipe(map(company => {
        this.companyData = company['data'].doc;
      }),
        mergeMap(company => {
          const person = this._Pservice.getAll()
            .pipe()
            .subscribe(
              personData => {
                this.personList = personData['data'].data;
              },
              error => {
                this.error = error;
                this.SpinnerService.hide();
              });
          const article = this._Aservice.getAll()
            .pipe()
            .subscribe(
              articleData => {
                this.companyArticle = articleData['data'].data;
              },
              error => {
                this.error = error;
                this.SpinnerService.hide();
              });

          return forkJoin([person, article]);
        })
      ).subscribe(
        result => {
          this.companyData = result['data'].doc;
        },
        error => {
          this.error = error;
          this.SpinnerService.hide();
        });
  }

}
