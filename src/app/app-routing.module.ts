import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'mis-guias',
    loadChildren: () => import('./pages/mis-guias/mis-guias.module').then( m => m.MisGuiasPageModule)
  },
  {
    path: 'crear-guias',
    loadChildren: () => import('./pages/crear-guias/crear-guias.module').then( m => m.CrearGuiasPageModule)
  },
  {
    path: 'informacion',
    loadChildren: () => import('./pages/informacion/informacion.module').then( m => m.InformacionPageModule)
  },
  {
    path: 'nombre-guia',
    loadChildren: () => import('./pages/nombre-guia/nombre-guia.module').then( m => m.NombreGuiaPageModule)
  },
  {
    path: 'guia-completada',
    loadChildren: () => import('./pages/guia-completada/guia-completada.module').then( m => m.GuiaCompletadaPageModule)
  },
  {
    path: 'simulador',
    loadChildren: () => import('./pages/simulador/simulador.module').then( m => m.SimuladorPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
