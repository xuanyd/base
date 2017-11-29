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
	/**
  	* 初始化
  	*/
  	ngOnInit() {
  	}

  	toggleNav() {
  		alert('menu');
  	}
}

