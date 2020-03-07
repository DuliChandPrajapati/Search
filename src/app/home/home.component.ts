import { Component } from '@angular/core';
import { first } from 'rxjs/operators';


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
        private _service:SearchService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.loading = true;
    }
    companyList(){
        this._service.getAll().pipe(first()).subscribe(list => {
            console.log("list", list);
            this.loading = false;
        },error=>{
            this.error = error;
            this.loading = false;
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