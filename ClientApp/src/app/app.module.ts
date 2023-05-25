import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { NgbDateAdapter, NgbDatepickerConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { fontAwesomeIcons } from './config/font-awesome-icons';
import { NgbDateDayjsAdapter } from './config/datepicker-adapter';
import * as dayjs from 'dayjs';
import './config/dayjs';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { MainComponent } from './layouts/main/main.component';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { httpInterceptorProviders } from './core/interceptor';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    AppRoutingModule,     // Main routes for application
    CoreModule,           // Singleton objects (services, components that are loaded only once, etc.)
    SharedModule, NgbModule,         // Shared (multi-instance) objects
  ],
  providers: [
    { provide: NgbDateAdapter, useClass: NgbDateDayjsAdapter },
    //  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
     httpInterceptorProviders
  ],
  declarations: [AppRoutingModule.components, TestErrorsComponent, NotFoundComponent, ServerErrorComponent],
  bootstrap: [MainComponent]
})
export class AppModule { 
  constructor(
    iconLibrary: FaIconLibrary,
    dpConfig: NgbDatepickerConfig,
  ) {
    iconLibrary.addIcons(...fontAwesomeIcons);
    dpConfig.minDate = { year: dayjs().subtract(100, 'year').year(), month: 1, day: 1 };
  }
}