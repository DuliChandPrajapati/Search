import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { PersonService, ArticleService, SearchService } from '@app/_services';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.less']
})
export class PersonDetailComponent implements OnInit {
public personData : any;
public companyList : any;
loading;
error='';
lastsegment;
constructor(private router:Router, private _Pservice:PersonService, private _service:SearchService) {
  this.companyList = JSON.parse(localStorage.getItem('companies'));
 }

  ngOnInit() {

    var array = this.router.url.split('/');
    this.lastsegment = array[array.length-1];
    this._Pservice.getById(this.lastsegment)
        .pipe(map(person =>{
          this.personData = person['data'].doc;
        }),
        mergeMap(data =>{
          const company = this._service.getAll()
          .pipe()
          .subscribe(
            personData => {
                this.companyList = personData['data'].data;
              },
              error => {
                  this.error = error;
                  this.loading = false;
              });
          return forkJoin([company]);
        })
        ).subscribe(
          result => {
              this.personData = result['data'].doc;
            },
            error => {
                this.error = error;
                this.loading = false;
        });
  }

}
