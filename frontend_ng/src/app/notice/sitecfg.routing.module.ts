import { NgModule }   from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SiteCfgComponent } from './sitecfg.component';
import { NoticeComponent } from './notice.component';

const sitecfgRoutes: Routes = [
    {
        path: '', component: SiteCfgComponent,
        children: [
            {
                path:'notice',
                component:NoticeComponent
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