import { NgModule }   from '@angular/core'
import { CommonModule }  from '@angular/common'
import { TestComponent } from './test.component'
import { LayoutComponent }   from './layout.component'
import { TestRoutingModule  } from './test.routing.module'
import { PageComponent } from '../common/page'
import { SelectTreeComponent } from '../common/select-tree'
import { ModalComponent } from '../common/modal'


@NgModule({
  imports:      [ 
    CommonModule,
    TestRoutingModule
  ],
  declarations: [
    TestComponent,
    PageComponent,
    SelectTreeComponent,
    ModalComponent,
    LayoutComponent
  ],
  exports:      [ 
  ],
  providers:    []
})

export class TestModule { }

