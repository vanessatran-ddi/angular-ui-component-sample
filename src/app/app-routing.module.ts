import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { BasicFormSuccessComponent } from './basic-form/basic-form-success.component';
import {BadgeComponent} from "./badge/badge.component";
import {DetailsComponent} from "./details/details.component";
import {FormStepperComponent} from "./form-stepper/form-stepper.component";
import {ModalComponent} from "./modal/modal.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: {url: "home"}},

  { path: 'work-queue', component: HomeComponent, data: {url: "work-queue"}},
  { path: 'certification/work-queue', component: HomeComponent, data: {url: "/certification/work-queue"}},
  { path: 'certification/my-assignments', component: HomeComponent, data: {url: "/certification/my-assignments"}},
  { path: 'certification/search', component: HomeComponent, data: {url: "/certification/search"}},
  { path: 'certification/admin-data', component: HomeComponent, data: {url: "/certification/admin-data"}},
  { path: 'licensing/dashboard', component: HomeComponent, data: {url: "/licensing/dashboard"}},
  { path: 'licensing/search', component: HomeComponent, data: {url: "/licensing/search"}},
  { path: 'licensing/reporting', component: HomeComponent, data: {url: "/licensing/reporting"}},
  { path: 'licensing/admin-data', component: HomeComponent, data: {url: "/licensing/admin-data"}},
  { path: 'family-day-home', component: HomeComponent, data: {url: "/family-day-home"}},
  { path: 'space-creation/programs', component: HomeComponent, data: {url: "/space-creation/programs"}},
  { path: 'space-creation/grant-management', component: HomeComponent, data: {url: "/space-creation/grant-management"}},
  { path: 'affordability-grants/programs', component: HomeComponent, data: {url: "/affordability-grants/programs"}},
  { path: 'affordability-grants/grant-management', component: HomeComponent, data: {url: "/affordability-grants/grant-management"}},
  { path: 'adjustments', component: HomeComponent, data: {url: "/adjustments"}},
  { path: 'wage-top-up', component: HomeComponent, data: {url: "/wage-top-up"}},
  { path: 'subsidy/work-queue', component: HomeComponent, data: {url: "/subsidy/work-queue"}},
  { path: 'subsidy/my-assignments', component: HomeComponent, data: {url: "/subsidy/my-assignments"}},
  { path: 'subsidy/subsidy-application-form', component: HomeComponent, data: {url: "/subsidy/subsidy-application-form"}},
  { path: 'subsidy/email-notifications', component: HomeComponent, data: {url: "/subsidy/email-notifications"}},
  { path: 'subsidy/search', component: HomeComponent, data: {url: "/subsidy/search"}},
  { path: 'program-management/programs', component: HomeComponent, data: {url: "/program-management/programs"}},
  { path: 'program-management/users', component: HomeComponent, data: {url: "/program-management/users"}},
  { path: 'program-management/access-requests', component: HomeComponent, data: {url: "/program-management/access-requests"}},
  { path: 'program-management/removal-requests', component: HomeComponent, data: {url: "/program-management/removal-requests"}},
  { path: 'goa-staff-management', component: HomeComponent, data: {url: "/goa-staff-management"}},

  { path: 'badge', component: BadgeComponent },
  { path: 'basic-form', component: BasicFormComponent },
  { path: 'basic-form-success', component: BasicFormSuccessComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'form-stepper', component: FormStepperComponent},
  { path: 'modal', component: ModalComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
