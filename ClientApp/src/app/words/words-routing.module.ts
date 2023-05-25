import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from '../core/auth/auth.guard';

import { WordsComponent } from './list/words.component';
import { WordUpdateComponent } from './update/word-update.component';

const routes: Routes = [
  {
    path: '', component: WordsComponent,
    data: {
      pageTitle: 'Words Management',
    },
    // canActivate: [AuthGuard]
  },
  {
    path: ':id/edit',
    component: WordUpdateComponent,
    data: {
      pageTitle: 'Update Word Details',
    },
    // resolve: {
    //   label: WordRoutingResolveService,
    // },
    // canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WordsRoutingModule { 
  static components = [ WordsComponent, WordUpdateComponent ];
}
