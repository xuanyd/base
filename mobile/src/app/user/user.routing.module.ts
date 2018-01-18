import { NgModule }   from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent }  from './user.component';
import { LoginComponent }  from './login/login.component';

const userRoutes: Routes = [
  {
    path: '', component: UserComponent,
    children: [
      {
        path:'login',
        component:LoginComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }