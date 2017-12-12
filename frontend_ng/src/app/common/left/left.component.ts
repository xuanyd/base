import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { LocalStorage } from '../storage/local.storage'
import { MenuData } from '../models/main-model'

/**
 * 左侧菜单组件
 */
@Component({
  selector: 'c-left-menu',
  templateUrl: './left.component.html',
  styleUrls: ['../../main/main.component.scss']
})

export class LeftComponent implements OnInit {
	 
  treeMenu: string='treeview'
  userName: string=''
  menuData:[{
    "id": "1",
    "parentId": "0",
    "name": "主页"
  },{
    "id": "2",
    "parentId": "0",
    "name": "网站管理",
    "children": [{
      "id": "021",
      "parentId": "2",
      "name": "通知公告",
      "url": '/app/sitecfg/notice'
    },{
      "id": "022",
      "parentId": "2",
      "name": "中心新闻",
      "url": '/app/sitecfg/center-news'
    },{
      "id": "023",
      "parentId": "2",
      "name": "友情链接",
      "url": '/app/sitecfg/center-news'
    }]
  }]

  constructor(private router: Router,private ls: LocalStorage) {
    this.userName = ls.getObject('username')
  }
   
  /**
  * 初始化
  */
  ngOnInit() {
      
  }

  clickTree(t) {
    this.treeMenu = 'treeview active'
  }

  toMenu() {
    this.router.navigate(['/app/sitecfg/notice']);
  }

  initTreeMenu() {

  }
}

