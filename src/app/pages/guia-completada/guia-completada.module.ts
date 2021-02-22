import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuiaCompletadaPageRoutingModule } from './guia-completada-routing.module';

import { GuiaCompletadaPage } from './guia-completada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuiaCompletadaPageRoutingModule
  ],
  declarations: [GuiaCompletadaPage]
})
export class GuiaCompletadaPageModule {}
