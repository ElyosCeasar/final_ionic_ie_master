import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowSpeceficFormForManagerPageRoutingModule } from './show-specefic-form-for-manager-routing.module';

import { ShowSpeceficFormForManagerPage } from './show-specefic-form-for-manager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowSpeceficFormForManagerPageRoutingModule
  ],
  declarations: [ShowSpeceficFormForManagerPage]
})
export class ShowSpeceficFormForManagerPageModule {}
