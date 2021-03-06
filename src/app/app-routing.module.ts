import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // redirectTo: 'home',
    // pathMatch: 'full',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
   {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  // {
  //   path: 'tabs',
  //   loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  // },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'community',
    loadChildren: () => import('./community/community.module').then( m => m.CommunityPageModule)
  },
  // {
  //   path: 'me',
  //   loadChildren: () => import('./Account/sign-in/sign-in.module').then( m => m.MePageModule)
  // },
  {
    path: 'sign-in',
    loadChildren: () => import('./Account/sign-in/sign-in.module').then( m => m.MePageModule)
  },
  {
    path: 'me',
    loadChildren: () => import('./Account/me/me.module').then( m => m.MePageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./Account/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
