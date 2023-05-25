import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularEditorModule } from '@kolkov/angular-editor';

import { SettingsRoutingModule } from './settings-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,SettingsRoutingModule,SharedModule,AngularEditorModule
  ],
  declarations: [
    SettingsRoutingModule.components
  ]
})
export class SettingsModule { }
