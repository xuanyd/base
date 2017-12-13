import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { 
    path: 'main',  
    loadChildren: 'app/main/main.module#MainModule'
  }
];

@NgModule({
  imports: [
   RouterModule.forRoot(appRoutes,{preloadingStrategy: null, useHash:true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
