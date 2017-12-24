import { NgModule } from '@angular/core'
import { CommonModule }       from '@angular/common'
import { FormsModule, ReactiveFormsModule} from "@angular/forms"
import { SiteCfgRoutingModule } from './sitecfg.routing.module'
import { SiteCfgComponent } from './sitecfg.component'
import { NoticeComponent } from './notice/notice.component'
import { NoticeEditComponent } from './notice/notice_edit.component'
import { NoticeAddComponent } from './notice/notice_add.component'
import { ColumnComponent } from './column/column.component'
import { UEditorModule } from 'ngx-ueditor'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SiteCfgRoutingModule,
    UEditorModule.forRoot({
        path: '../assets/ueditor/',
        options: {
          themePath: '../assets/ueditor/themes/'
        }
    })
  ],
  declarations: [
    SiteCfgComponent,
    NoticeComponent,
    NoticeEditComponent,
    NoticeAddComponent,
    ColumnComponent
  ],
  exports: [
  ],
  providers: []
})

export class SiteCfgModule {
}
