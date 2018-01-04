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
	
  leftMenus: Array<boolean> = [false,false]
  userName: string=''

  constructor(private router: Router,private ls: LocalStorage) {
    this.userName = ls.getObject('username')
  }
   
  /**
  * 初始化
  */
  ngOnInit() {
  }

  openLeft(idx) {
     for(let i =0; i < this.leftMenus.length; i++){
      if(i == idx)
        this.leftMenus[idx] = !this.leftMenus[idx]
      else
        this.leftMenus[i] = false
    }
  }

  toMenu() {
    this.router.navigate(['/app/sitecfg/notice']);
  }

}

