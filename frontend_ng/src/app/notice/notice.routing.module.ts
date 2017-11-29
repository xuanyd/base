import { NgModule, OnInit } from '@angular/core'
import { RouterModule, Routes, Router } from '@angular/router'
import { NoticeComponent }   from './notice.component'

/**
 * 主体路由
 */
const mainRoutes: Routes = [
  {
    path: '',
    component: NoticeComponent,
    children: [
      { path: 'notice', loadChildren: 'app/home/home.module#HomeModule' }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class NoticeRoutingModule { }