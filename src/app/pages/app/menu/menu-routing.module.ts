import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main-app/menu/show',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'show',
        loadChildren: () => import('../show/show.module').then(m => m.ShowPageModule)
      },
      {
        path: 'showSpeceficForm/:id',
        loadChildren: () => import('../show-specefic-form/show-specefic-form.module').then(m => m.ShowSpeceficFormPageModule)
      },
      {
        path: 'showSpeceficFormForManager/:id',
        loadChildren: () => import('../show-specefic-form-for-manager/show-specefic-form-for-manager.module')
          .then(m => m.ShowSpeceficFormForManagerPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule { }
