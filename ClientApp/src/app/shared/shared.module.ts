import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HasAnyAuthorityDirective } from './directives/has-any-authority.directive';
import { FormatMediumDatePipe } from './pipes/format-medium-date.pipe';
import { FormatMediumDateTimePipe } from './pipes/format-medium-datetime.pipe';
import { SortByDirective } from './directives/sortby.directive';
import { ItemCountComponent } from './pagination/item-count.component';
import { NgxPrintModule } from 'ngx-print';

@NgModule({
  imports: [CommonModule],
  declarations: [
    HasAnyAuthorityDirective,
    FormatMediumDatePipe,
    FormatMediumDateTimePipe,
    SortByDirective,
    ItemCountComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule,
    HasAnyAuthorityDirective,
    FormatMediumDatePipe,
    FormatMediumDateTimePipe,
    SortByDirective,
    ItemCountComponent,
    NgxPrintModule
  ],
})
export class SharedModule { }