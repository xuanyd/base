import { Component, OnInit,ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage } from '../storage/local.storage';
import { MenuData } from '../models/main-model';
import { ActiveTitleService } from "../page-title/active-title.service";

@Component({
  selector: 'c-left-menu',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})

export class LeftComponent implements OnInit {
	
  leftMenus: Array<boolean> = [false, false, false, false, false,false,false,false]
  userName: string=''
  _ls:LocalStorage
  _activeTitleService : ActiveTitleService
  leftMenuJson = [
    {"id": 1, name: "主页",pid: 0, url: "/app/home", cls: "fa-home"},
    {"id": 2, name: "菜单1",pid: 0, url: "", cls: "fa-book",  
      childs: [
        {"id": 3, name: "菜单11",pid: 2, url: "/app/sitecfg/notice"},
        {"id": 4, name: "菜单12",pid: 2, url: "/app/sitecfg/link"},
        {"id": 5, name: "菜单13",pid: 2, url: "/app/sitecfg/column"}
      ]
    },
    {"id": 6, name: "菜单2",pid: 0, url: "", cls: "fa-users",
      childs:[
        {"id": 7, name: "菜单21",pid: 6, url: "/app/test/layout"}
      ]
    }
  ]

  constructor(private router: Router,
    private ls: LocalStorage, 
    private activeTitleService: ActiveTitleService) {
    this.userName = ls.getObject('userName')
    this._ls = ls
    this._activeTitleService = activeTitleService
  }
   
  ngOnInit() {
  }
  openLeft(idx,url) {
    this._activeTitleService.setTitle('sdfs');
    for(let i =0; i < this.leftMenus.length; i++){
      if(i == idx) {
        this.leftMenus[idx] = !this.leftMenus[idx];
      }
      else {
        if(url == "")
          this.leftMenus[i] = false;
      }
    }
    if(url != "") {
      this.router.navigate([url]);
      this._ls.setObject("curl",url);
    }
  }
}

