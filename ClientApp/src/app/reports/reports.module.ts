import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ReportsRoutingModule } from './reports-routing.module';
@NgModule({
  imports: [ReportsRoutingModule,SharedModule],
  declarations: [
    ReportsRoutingModule.components,
  ],
})
export class ReportsModule { }
