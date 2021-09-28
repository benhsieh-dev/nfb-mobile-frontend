import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    // redirectTo: 'folder/Inbox',
    redirectTo: 'mainscreen',
    pathMatch: 'full'
  },
  {
    path: 'mainscreen',
    loadChildren: () => import('./mainscreen/mainscreen.module').then( m => m.MainscreenPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
