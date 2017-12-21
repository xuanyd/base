import { NgModule } from '@angular/core'
import { CommonModule }       from '@angular/common'
import { FormsModule } from '@angular/forms'
import { SiteCfgRoutingModule } from './sitecfg.routing.module'
import { SiteCfgComponent } from './sitecfg.component'
import { NoticeComponent } from './notice/notice.component'
import { NoticeEditComponent } from './notice/notice_edit.component'
import { UEditorModule } from 'ngx-ueditor'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SiteCfgRoutingModule,
    UEditorModule.forRoot({
      path: '../assets/ueditor/',
      options: {
        themePath: (~location.href.indexOf('github') ? '/ngx-ueditor' : '') +  '/assets/ueditor/themes/'
      }
    })
  ],
  declarations: [
    SiteCfgComponent,
    NoticeComponent,
    NoticeEditComponent
  ],
  exports: [
  ],
  providers: []
})
export class SiteCfgModule { }
