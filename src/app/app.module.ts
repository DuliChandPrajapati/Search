import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgxSpinnerModule } from "ngx-spinner";  

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { HeaderComponent } from './_shared/header/header.component';
import { FooterComponent } from './_shared/footer/footer.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';;
import { SearchComponent } from './_shared/search/search.component'
@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        FormsModule,
        NgxPaginationModule,
        NgxSpinnerModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AdminComponent,
        LoginComponent,
        HeaderComponent,
        FooterComponent ,
        EmployeeListComponent ,
        CompanyListComponent ,
        CompanyDetailComponent ,
        PersonDetailComponent,
        ContactComponent,
        AboutComponent
,
        SearchComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }