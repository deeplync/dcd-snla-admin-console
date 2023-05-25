import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LearnedWordComponent } from './learned-word/learned-word.component';
import { ScannedWordComponent } from './scanned-word/scanned-word.component';
import { UserMessageComponent } from './user-message/user-message.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'user-message',
        component: UserMessageComponent,
        data: {
          pageTitle: 'User Message',
          defaultSort: 'name,asc',
        },
      },
      {
        path: 'scanned-word-report',
        component: ScannedWordComponent,
        data: {
          pageTitle: 'Scanned Words',
        }, 
      },
      {
        path: 'learned-word-report',
        component: LearnedWordComponent,
        data: {
          pageTitle: 'Learned Words',
        },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule {
  static components = [UserMessageComponent,LearnedWordComponent,ScannedWordComponent];
}
