import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SiteCfgRoutingModule } from './sitecfg.routing.module';
import { SiteCfgComponent } from './sitecfg.component';
import { NoticeComponent } from './notice.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SiteCfgRoutingModule
  ],
  declarations: [
    SiteCfgComponent,
    NoticeComponent
  ],
  exports: [
  ],
  providers: []
})
export class SiteCfgModule { }
