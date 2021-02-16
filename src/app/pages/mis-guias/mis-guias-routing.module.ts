import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisGuiasPage } from './mis-guias.page';

const routes: Routes = [
  {
    path: '',
    component: MisGuiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisGuiasPageRoutingModule {}
