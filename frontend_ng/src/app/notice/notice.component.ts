import { Component, OnInit } from '@angular/core'
import { HttpService } from '../common/util/http.service'


@Component({
  selector: 'c-sitecfg-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})

export class NoticeComponent implements OnInit {

	private noticeList : Array<>
	constructor(private httpService: HttpService) {

	}

	/**
  * 初始化
  */
  ngOnInit() {
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
  	this.httpService.get("http://localhost:8081/admin/noticelist", {

  	}, function (successful, data, res) {
        if (successful) {
          if (data.flag!='success') {
          	that.noticeList = data.pageInfo.infoList
          	console.log(noticeList)
          }
        }
      }, function (successful, msg, err) {
      	console.log(err);
      })
  }
}
