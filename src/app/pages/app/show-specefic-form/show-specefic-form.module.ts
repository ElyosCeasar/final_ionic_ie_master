import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowSpeceficFormPageRoutingModule } from './show-specefic-form-routing.module';
import { MapComponent } from './../../../components/map/map.component';
import { ShowSpeceficFormPage } from './show-specefic-form.page';

@NgModule({
  imports: [

    CommonModule,
    FormsModule,
    IonicModule,

    ShowSpeceficFormPageRoutingModule
  ],
  declarations: [MapComponent, ShowSpeceficFormPage]
})
export class ShowSpeceficFormPageModule { }
