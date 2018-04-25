import { NgModule }   from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TestComponent } from './test.component';
import { LayoutComponent }   from './layout.component';
import { TestRoutingModule  } from './test.routing.module';
import { GridComponent } from '../common/lib/grid/grid.component';


@NgModule({
  imports:      [ 
    CommonModule,
    TestRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TestComponent,
    LayoutComponent,
    GridComponent
  ],
  exports:      [ 
  ],
  providers:    []
})

export class TestModule { }

