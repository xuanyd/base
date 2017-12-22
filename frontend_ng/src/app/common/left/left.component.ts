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
  styleUrls: ['./left.component.scss']
})

export class LeftComponent implements OnInit {
	
  treeMenu: string='treeview'
  treeMenuCls=[]
  userName: string=''
  testData : Array<string> = ['1','2','3'];

  constructor(private router: Router,private ls: LocalStorage) {
    this.userName = ls.getObject('username')
  }
   
  /**
  * 初始化
  */
  ngOnInit() {
      this.treeMenuCls = ['',]
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

