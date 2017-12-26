import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import  { AppRoutingModule } from './app-routing.module';

//http
import { HttpService }   from './common/util/http.service';

import { HttpModule }    from '@angular/http';

import { PermissionGuard   } from './common/util/PermissionGuard'
import { LocalStorage } from './common/storage/local.storage'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  	AppRoutingModule,
    NgbModule.forRoot(),
    BrowserModule,
    HttpModule
  ],
  providers: [
    HttpService,
    PermissionGuard,
    LocalStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
