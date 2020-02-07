import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowSpeceficFormForManagerPage } from './show-specefic-form-for-manager.page';

const routes: Routes = [
  {
    path: '',
    component: ShowSpeceficFormForManagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowSpeceficFormForManagerPageRoutingModule {}
