import { NgModule }   from '@angular/core'
import { NoticeComponent }   from './notice.component'
import { HeaderComponent }   from '../common/header/header.component'
import { LeftComponent }   from '../common/left/left.component'
import { NoticeRoutingModule } from './notice.routing.module'

@NgModule({
  imports:      [
     NoticeRoutingModule
  ],
  declarations: [
     NoticeComponent,
     HeaderComponent,
     LeftComponent
  ],
  exports:      [
  ],
  providers:    []
})

export class NoticeModule { }

