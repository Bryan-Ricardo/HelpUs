import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NombreGuiaPageRoutingModule } from './nombre-guia-routing.module';

import { NombreGuiaPage } from './nombre-guia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NombreGuiaPageRoutingModule,
  ],
  exports: [
  ],
  declarations: [NombreGuiaPage]
})
export class NombreGuiaPageModule {}
