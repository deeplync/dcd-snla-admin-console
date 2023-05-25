import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './list/customers.component';

const routes: Routes = [
  {
    path: '', component: CustomersComponent,
    data: {
      pageTitle: 'Customer Directory',
      defaultSort: 'id,asc',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule {
  static components = [CustomersComponent];
}
