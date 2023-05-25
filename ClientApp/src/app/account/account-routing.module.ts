import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PasswordComponent } from './password/password.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'password',
        component: PasswordComponent,
        data: {
          pageTitle: 'Change Password',
        },
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: {
          pageTitle: 'My Profile',
        },
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {
  static components = [PasswordComponent, ProfileComponent];
}
