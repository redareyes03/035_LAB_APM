import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'presupuesto',
    loadChildren: () =>
      import('./pages/presupuesto-page/presupuesto-page.module').then(
        (m) => m.PresupuestoPagePageModule
      ),
  },
  {
    path: 'paso1',
    loadChildren: () => 
      import('./pages/paso1/paso1.module').then((m) => m.Paso1PageModule),
  },
  {
    path: 'paso2',
    loadChildren: () =>
      import('./pages/paso2/paso2.module').then((m) => m.Paso2PageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
