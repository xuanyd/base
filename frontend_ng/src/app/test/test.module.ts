import { NgModule }   from '@angular/core'
import { TestComponent } from './test.component'
import { LayoutComponent }   from './layout.component'
import { TestRoutingModule  } from './test.routing.module'

@NgModule({
  imports:      [
  	TestComponent,
    TestRoutingModule
  ],
  declarations: [
     LayoutComponent
  ],
  exports:      [
  ],
  providers:    []
})

export class TestModule { }

