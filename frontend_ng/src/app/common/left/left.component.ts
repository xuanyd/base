import { Component, OnInit } from '@angular/core'

/**
 * 左侧菜单组件
 */
@Component({
  selector: 'c-left-menu',
  templateUrl: './left.component.html',
  styleUrls: ['../../main/main.component.scss']
})

export class LeftComponent implements OnInit {
	 
    treeMenu:string='treeview';
   
   /**
  	* 初始化
  	*/
  	ngOnInit() {
      
  	}

  	clickTree(t) {
      this.treeMenu = 'treeview active'
  	}

    toMenu() {
      this.router.navigate(['/app/notice']);
    }
}

