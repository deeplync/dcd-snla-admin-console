import { NgModule } from '@angular/core';

import { CustomersRoutingModule } from './customers-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CustomersRoutingModule,SharedModule],
  declarations: [
    CustomersRoutingModule.components
  ]
})
export class CustomersModule { }
