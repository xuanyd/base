import { NgModule }   from '@angular/core'
import { MainComponent }   from './main.component'
import { HeaderComponent }   from '../common/header/header.component'
import { LeftComponent }   from '../common/left/left.component'
import { MainRoutingModule  } from './main.routing.module'
import { LocalStorage } from '../common/storage/local.storage'



@NgModule({
  imports:      [
     MainRoutingModule
  ],
  declarations: [
     MainComponent,
     HeaderComponent,
     LeftComponent
  ],
  exports:      [
  ],
  providers:    [LocalStorage]
})

export class MainModule { }

