import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowSpeceficFormPage } from './show-specefic-form.page';

const routes: Routes = [
  {
    path: '',
    component: ShowSpeceficFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowSpeceficFormPageRoutingModule {}
