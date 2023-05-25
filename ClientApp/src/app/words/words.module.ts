import { NgModule } from '@angular/core';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SharedModule } from '../shared/shared.module';

import { WordsRoutingModule } from './words-routing.module';

@NgModule({
  imports: [WordsRoutingModule, SharedModule,NgxDropzoneModule],
  declarations: [WordsRoutingModule.components]
})
export class WordsModule { }
