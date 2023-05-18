import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { BasicFormSuccessComponent } from './basic-form/basic-form-success.component';
import {BadgeComponent} from "./badge/badge.component";
import {DetailsComponent} from "./details/details.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'badge', component: BadgeComponent },
  { path: 'basic-form', component: BasicFormComponent },
  { path: 'basic-form-success', component: BasicFormSuccessComponent },
  { path: 'details', component: DetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
