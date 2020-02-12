import { Component } from '@angular/core';
import { first } from 'rxjs/operators';


import { User } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';
import { Router } from '@angular/router';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    currentUser: User;
    userFromApi: User;

    constructor(
        private userService: UserService,
        private router:Router,
        private authenticationService: AuthenticationService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.loading = true;
        this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
            this.loading = false;
            this.userFromApi = user;
        });
    }
    searchCompanyData(){
        this.router.navigate(['/companylist']);
    }
}