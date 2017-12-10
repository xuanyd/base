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

    userDrop:string='dropdown'

	  /**
  	* 初始化
  	*/
  	ngOnInit() {
  	}

    clickUseDrop() {
      if(this.userDrop=="dropdown open") {
        this.userDrop="dropdown"
      } else {
        this.userDrop="dropdown open"
      }
      
    }

  	toggleNav() {
  		alert('menu');
  	}
}

