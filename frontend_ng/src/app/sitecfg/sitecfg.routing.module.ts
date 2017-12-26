import { NgModule }   from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { SiteCfgComponent } from './sitecfg.component'
import { NoticeComponent } from './notice/notice.component'
import { NoticeEditComponent } from './notice/notice-edit.component'
import { NoticeAddComponent } from './notice/notice-add.component'
import { ColumnComponent } from './column/column.component'
import { ColumnAddComponent } from './column/column-add.component'
import { ColumnEditComponent } from './column/column-edit.component'

const sitecfgRoutes: Routes = [
  {
    path: '', component: SiteCfgComponent,
    children: [
      {
        path:'notice',
        component:NoticeComponent
      },
      {
        path:'notice-edit',
        component:NoticeEditComponent
      },
      {
        path:'notice-add',
        component:NoticeAddComponent
      },
      {
        path:'column',
        component:ColumnComponent
      },
      {
        path:'column-add',
        component:ColumnAddComponent
      },
      {
        path:'column-edit',
        component:ColumnEditComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(sitecfgRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SiteCfgRoutingModule { }