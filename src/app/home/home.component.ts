import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { NgxSpinnerService } from "ngx-spinner";  

import { User } from '@app/_models';
import { UserService, AuthenticationService,SearchService } from '@app/_services';
import { Router } from '@angular/router';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    currentUser: User;
    userFromApi: User;
    error= '';

    constructor(
        private userService: UserService,
        private router:Router,
        private authenticationService: AuthenticationService,
        private _service:SearchService,
        private SpinnerService: NgxSpinnerService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.companyList()
    }
    companyList(){
        this.SpinnerService.show();
        this._service.getAll().pipe(first()).subscribe(list => {
            this.SpinnerService.hide();  
        },error=>{
            this.error = error;
            this.SpinnerService.hide();
        });
    }
    searchCompanyData(){
        this.router.navigate(['/companylist']);
        // this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
        //     this.loading = false;
        //     this.userFromApi = user;
        //     this.router.navigate(['/companylist']);
        // },error=>{
        //     this.error = error;
        //     this.loading = false;
        // });
       
    }
}