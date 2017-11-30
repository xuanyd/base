import { NgModule, OnInit } from '@angular/core'
import { RouterModule, Routes, Router } from '@angular/router'
import { MainComponent }   from './main.component'
import { NoticeComponent }   from '../notice/notice.component'

/**
 * 主体路由
 */
const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
      { path: 'notice', loadChildren: 'app/notice/notice.module#NoticeModule' }
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

export class MainRoutingModule { }