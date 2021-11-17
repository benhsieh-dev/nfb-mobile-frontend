import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
       {
          path: 'home',
          loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
        },
         {
          path: 'categories',
          loadChildren: () => import('../categories/categories.module').then( m => m.CategoriesPageModule)
        },
        {
          path: 'community',
          loadChildren: () => import('../community/community.module').then( m => m.CommunityPageModule)
        },
        {
          path: 'me',
          loadChildren: () => import('../Me/sign-in/sign-in.module').then( m => m.MePageModule)
        },
      {
          path: '',
          // redirectTo: '/tabs/home',
          redirectTo: '/tabs/home',
          pathMatch: 'full'
      }
         ]
    },
     {
          path: '',
          // redirectTo: '/tabs/home',
          redirectTo: '/tabs/home',
          pathMatch: 'full'
      }
      ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
