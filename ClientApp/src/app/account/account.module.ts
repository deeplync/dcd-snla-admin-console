import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
  imports: [AccountRoutingModule,SharedModule],
  declarations: [
    AccountRoutingModule.components,
  ],
})
export class AccountModule { }
