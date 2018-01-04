import { NgModule }   from '@angular/core'
import { CommonModule }  from '@angular/common'
import { TestComponent } from './test.component'
import { LayoutComponent }   from './layout.component'
import { TestRoutingModule  } from './test.routing.module'
import { PageComponent } from '../common/page'

@NgModule({
  imports:      [ 
    CommonModule,
    TestRoutingModule
  ],
  declarations: [
    TestComponent,
    LayoutComponent,
    PageComponent
  ],
  exports:      [ 
  ],
  providers:    []
})

export class TestModule { }

