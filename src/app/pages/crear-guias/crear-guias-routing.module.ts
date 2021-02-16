import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearGuiasPage } from './crear-guias.page';

const routes: Routes = [
  {
    path: '',
    component: CrearGuiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearGuiasPageRoutingModule {}
