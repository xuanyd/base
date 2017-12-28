import { NgModule }   from '@angular/core'
import { CommonModule }  from '@angular/common'
import { TestComponent } from './test.component'
import { LayoutComponent }   from './layout.component'
import { TestRoutingModule  } from './test.routing.module'

@NgModule({
  imports:      [ 
    CommonModule,
    TestRoutingModule
  ],
  declarations: [
    TestComponent,
    LayoutComponent
  ],
  exports:      [ 
  ],
  providers:    []
})

export class TestModule { }

