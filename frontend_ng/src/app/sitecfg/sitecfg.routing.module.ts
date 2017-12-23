import { NgModule }   from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SiteCfgComponent } from './sitecfg.component';
import { NoticeComponent } from './notice/notice.component';
import { NoticeEditComponent } from './notice/notice_edit.component';
import { NoticeAddComponent } from './notice/notice_add.component';

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
        component:NoticeEditComponent
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