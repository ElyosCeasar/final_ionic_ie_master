import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowAnswersPage } from './show-answers.page';

const routes: Routes = [
  {
    path: '',
    component: ShowAnswersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowAnswersPageRoutingModule {}
