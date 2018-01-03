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

    sub1Open:string = 'dropdown'
	  /**
  	* 初始化
  	*/
  	ngOnInit() {
  	}

    open(idx){
      if(this.sub1Open == 'dropdown')
        this.sub1Open = 'dropdown open'
      else
        this.sub1Open = 'dropdown'
    }
   
  	toggleNav() {
  		alert('menu');
  	}
}

