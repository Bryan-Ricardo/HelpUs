import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisGuiasPageRoutingModule } from './mis-guias-routing.module';

import { MisGuiasPage } from './mis-guias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisGuiasPageRoutingModule
  ],
  declarations: [MisGuiasPage]
})
export class MisGuiasPageModule {}
