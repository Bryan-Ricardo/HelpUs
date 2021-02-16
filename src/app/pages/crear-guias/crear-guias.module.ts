import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearGuiasPageRoutingModule } from './crear-guias-routing.module';

import { CrearGuiasPage } from './crear-guias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearGuiasPageRoutingModule
  ],
  declarations: [CrearGuiasPage]
})
export class CrearGuiasPageModule {}
