import { Routes } from '@angular/router';
import {AddentryComponent} from './pages/addentry/addentry.component';
import {PastentriesComponent} from './pages/pastentries/pastentries.component';
import {SigninComponent} from './pages/signin/signin.component';
import {DeleteentryComponent} from './pages/pastentries/deleteentry/deleteentry.component';
import {ViewentryComponent} from './pages/pastentries/viewentry/viewentry.component';
import {UpdateentryComponent} from './pages/pastentries/updateentry/updateentry.component';
import {RegisterComponent} from './pages/register/register.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {DefaultComponent} from './pages/default/default.component';

export const routes: Routes = [

  {path:'signin', component:SigninComponent},
  {path:'register', component:RegisterComponent},
  {path: '', redirectTo: '/signin', pathMatch: 'full'},
  {
    path: 'dashboard',
    component: DashboardComponent, // Parent route
    children: [
      { path: '', redirectTo: 'default', pathMatch: 'full' },
      { path: 'default', component: DefaultComponent },
      { path: 'addentry', component: AddentryComponent },
      { path: 'pastentries', component: PastentriesComponent },
      { path: 'deleteentry/:id', component: DeleteentryComponent },
      { path: 'viewentry/:id', component: ViewentryComponent },
      { path: 'updateentry/:id', component: UpdateentryComponent },

    ]
  },
];
