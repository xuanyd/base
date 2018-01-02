import { Component, OnInit,ViewEncapsulation,ViewChild,ElementRef } from '@angular/core'
import { HttpService } from '../../common/util/http.service'
import { Router } from '@angular/router'

@Component({
  selector: 'c-sitecfg-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class NoticeComponent implements OnInit {

  noticeList:string
  pageInfo:string
  
	constructor(private router: Router,private httpService: HttpService,private el: ElementRef) {

	}

	/**
  * 初始化
  */
  ngOnInit() {
    console.log('----------')
  	this.getNoticeList()
  }

  /**
  * 
  */

  /**
  * 获取公告列表
  */
  getNoticeList() {
  	let that = this
  		this.httpService.get("admin/noticelist", {
  	}, function (successful, data, res) {
      if (successful) {
        if (data.flag!='1000W') {
        	that.noticeList = data.pageInfo.infoList
        	that.pageInfo = data.pageInfo
        	console.log(data.pageInfo)
        }
      }
    }, function (successful, msg, err) {
    	console.log(err);
    })
  }

  edit(id) {
    this.router.navigate(['/app/sitecfg/notice-edit'])
  }

  toAdd(){
   this.router.navigate(['/app/sitecfg/notice-add'])
  }

  add(){
    alert('123');
  }

  page() {
  	this.noticeList = null
  }
}
