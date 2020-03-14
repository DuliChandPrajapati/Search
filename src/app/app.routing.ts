import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { Role } from './_models';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        // canActivate: [AuthGuard]
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path:'companylist',
        component:CompanyListComponent,
        // canActivate: [AuthGuard]
    },
    {
        path:'companydetail/:id',
        component:CompanyDetailComponent,
        // canActivate: [AuthGuard]
    },
    {
        path:'personDetail/:id',
        component:PersonDetailComponent,
        // canActivate: [AuthGuard]
    },
    {
        path:'about',
        component:AboutComponent
        // canActivate: [AuthGuard]
    },
    {
        path:'contact',
        component:ContactComponent
        // canActivate: [AuthGuard]
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '/' }
];

export const appRoutingModule = RouterModule.forRoot(routes);