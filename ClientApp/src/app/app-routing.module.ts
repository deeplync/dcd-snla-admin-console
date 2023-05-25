import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Authority } from './config/authority.constants';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { UnauthorizedErrorComponent } from './errors/unauthorized-error/unauthorized-error.component';

import { FooterComponent } from './layouts/footer/footer.component';
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { ThankYouComponent } from './layouts/thank-you/thank-you.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    data: {
      authorities: [Authority.ADMIN, Authority.SUPER_ADMIN],
    },
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'words',
    data: {
      authorities: [Authority.ADMIN, Authority.SUPER_ADMIN],
    },
    loadChildren: () => import('./words/words.module').then(m => m.WordsModule)
  },
  {
    path: 'settings',
    data: {
      authorities: [Authority.ADMIN, Authority.SUPER_ADMIN],
    },
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
  },
  {
    path: 'report',
    data: {
      authorities: [Authority.ADMIN, Authority.SUPER_ADMIN],
    },
    loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)
  },
  {
    path: 'customers',
    data: {
      authorities: [Authority.ADMIN, Authority.SUPER_ADMIN],
    },
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
  },
  // {
  //   path: 'user',
  //   data: {
  //     authorities: [Authority.ADMIN, Authority.SUPER_ADMIN],
  //   },
  //   loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  // },
  {
    path: 'account',
    data: {
      authorities: [Authority.ADMIN, Authority.SUPER_ADMIN],
    },
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'thank-you',
    data: {
      authorities: [Authority.ADMIN, Authority.SUPER_ADMIN],
    },
    component: ThankYouComponent,
    outlet: 'route1'
  },
  { path: 'errors', component: TestErrorsComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'server-error', component: ServerErrorComponent },
  { path: 'unauthorized-error', component: UnauthorizedErrorComponent },
  { path: '**', component: NotFoundComponent, pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static components = [MainComponent, NavbarComponent, SidebarComponent, FooterComponent, ThankYouComponent];
}
