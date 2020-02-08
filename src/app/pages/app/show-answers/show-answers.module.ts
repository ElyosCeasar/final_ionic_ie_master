import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowAnswersPageRoutingModule } from './show-answers-routing.module';

import { ShowAnswersPage } from './show-answers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowAnswersPageRoutingModule
  ],
  declarations: [ShowAnswersPage]
})
export class ShowAnswersPageModule {}
