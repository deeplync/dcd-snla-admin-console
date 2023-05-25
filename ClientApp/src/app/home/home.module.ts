import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { HomeRoutingModule } from './home-routing.module';
import { NoOfNationalitiesComponent } from './no-of-nationalities/no-of-nationalities.component';
import { NoOfRegistrationComponent } from './no-of-registration/no-of-registration.component';
import { NoOfActiveUserComponent } from './no-of-active-user/no-of-active-user.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxChartsModule
  ],
  declarations: [
    HomeRoutingModule.components,
    NoOfActiveUserComponent,
    NoOfRegistrationComponent,
    NoOfNationalitiesComponent
  ]
})
export class HomeModule { }
