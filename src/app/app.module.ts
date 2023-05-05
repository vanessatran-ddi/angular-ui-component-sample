import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import '@abgov/web-components';
import { AngularComponentsModule } from '@abgov/angular-components';

import { HomeComponent } from './home/home.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { BasicFormSuccessComponent } from './basic-form/basic-form-success.component';
import {DialogModule} from "primeng/dialog";
import {ButtonModule} from "primeng/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DropdownModule} from "primeng/dropdown";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {BadgeComponent} from "./badge/badge.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BadgeComponent,
    BasicFormComponent,
    BasicFormSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularComponentsModule,
    DialogModule,
    ButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    OverlayPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
