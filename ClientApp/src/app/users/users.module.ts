import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [UsersRoutingModule,SharedModule],
  declarations: [
    UsersRoutingModule.components
  ], 
})
export class UsersModule { }
