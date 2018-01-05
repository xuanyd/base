import { Component, OnInit,ElementRef  } from '@angular/core'
import { Router } from '@angular/router'
import { LocalStorage } from '../storage/local.storage'
import { MenuData } from '../models/main-model'

@Component({
  selector: 'c-left-menu',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})

export class LeftComponent implements OnInit {
	
  leftMenus: Array<boolean> = [false, false, false, false, false,false,false]
  userName: string=''
  _ls:LocalStorage
  private leftMenuJson = [
    {"id": 1, name: "主页",pid: 0, url: "/app/home", cls: "fa-home"},
    {"id": 2, name: "内容设置",pid: 0, url: "", cls: "fa-book"  
      childs:[
        {"id": 3, name: "文章管理",pid: 2, url: "/app/sitecfg/notice"},
        {"id": 4, name: "友情链接",pid: 2, url: "/app/sitecfg/links"},
        {"id": 5, name: "栏目管理",pid: 2, url: "/app/sitecfg/column"}
      ]},
    {"id": 6, name: "用户管理",pid: 0, url: "", cls: "fa-users"
      childs:[
        {"id": 7, name: "密码修改",pid: 6, url: ""}
      ]
    }
  ]

  constructor(private router: Router,private ls: LocalStorage) {
    this.userName = ls.getObject('username')
    this._ls = ls
  }
   
  ngOnInit() {
  }
  openLeft(idx,url) {
    for(let i =0; i < this.leftMenus.length; i++){
      if(i == idx) {
        this.leftMenus[idx] = !this.leftMenus[idx]
      }
      else {
        if(url == "")
          this.leftMenus[i] = false
      }
    }
    if(url != "") {
      this.router.navigate([url])
      this._ls.setObject("curl","444")
    }
  }
}

