import { Component, OnInit } from '@angular/core'
import { HttpService } from '../common/util/http.service'


@Component({
  selector: 'c-sitecfg-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})

export class NoticeComponent implements OnInit {


	constructor(
      private httpService: HttpService) {

	}

	/**
  * 初始化
  */
  ngOnInit() {
  	this.getNoticeList()
  }

  /**
  * 获取公告列表
  */
  getNoticeList() {
  	this.httpService.get("http://localhost:8081/admin/noticelist", {

  	}, function (successful, data, res) {
        console.log(successful);
        if (successful) {
          if (data.flag!='success') {
          }
        }
      }, function (successful, msg, err) {
      	console.log(err);
      })
  }
}
