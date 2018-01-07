import { NgModule }   from '@angular/core'
import { CommonModule }  from '@angular/common'
import { TestComponent } from './test.component'
import { LayoutComponent }   from './layout.component'
import { TestRoutingModule  } from './test.routing.module'
import { PageComponent } from '../common/page'
import { SelectTreeComponent } from '../common/select-tree'

@NgModule({
  imports:      [ 
    CommonModule,
    TestRoutingModule
  ],
  declarations: [
    TestComponent,
    PageComponent,
    SelectTreeComponent,
    LayoutComponent
  ],
  exports:      [ 
  ],
  providers:    []
})

export class TestModule { }

