import { Component, OnInit } from '@angular/core'

/**
 * 左侧菜单组件
 */
@Component({
  selector: 'c-header-menu',
  templateUrl: './header.component.html',
  styleUrls: ['../../main/main.component.scss']
})

export class HeaderComponent implements OnInit {
  profileOpen:boolean = false  
  headerMenus:Array<boolean> = [false, false, false]
  /**
	* 初始化
	*/
	ngOnInit() {
	}

  openHeader(idx){
    for(let i =0; i < this.headerMenus.length; i++){
      if(i == idx)
        this.headerMenus[idx] = !this.headerMenus[idx]
      else
        this.headerMenus[i] = false
    }
  }
	toggleNav() {
		alert('menu');
	}
}

