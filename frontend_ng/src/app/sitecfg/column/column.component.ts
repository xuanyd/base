import { Component, OnInit,ViewEncapsulation,ViewChild,ElementRef } from '@angular/core'
import { HttpService } from '../../common/util/http.service'
import { Router } from '@angular/router'

@Component({
  selector: 'c-sitecfg-notice',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ColumnComponent implements OnInit {

  private columnList:string
  private pageInfo:string
  
	constructor(private router: Router,private httpService: HttpService,private el: ElementRef) {

	}

	/**
  * 初始化
  */
  ngOnInit() {
  	this.getColumnList()
  }

  /**
  * 
  */

  /**
  * 获取公告列表
  */
  getColumnList() {
  	let that = this
  		this.httpService.get("http://localhost:8081/admin/columnlist", {
  	}, function (successful, data, res) {
      if (successful) {
        if (data.flag!='success') {
        	that.columnList = data.pageInfo.infoList
        	that.pageInfo = data.pageInfo
        	console.log(data.pageInfo)
        }
      }
    }, function (successful, msg, err) {
    	console.log(err);
    })
  }

  edit(id) {
    this.router.navigate(['/app/sitecfg/column-edit'])
  }

  toAdd(){
   this.router.navigate(['/app/sitecfg/column-add'])
  }

  add(){
    alert('123');
  }

  page() {
  	this.columnList = null
  }
}
