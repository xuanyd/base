import { Component, OnInit } from '@angular/core'
import { HttpService } from '../../common/util/http.service'


@Component({
  selector: 'c-sitecfg-notice',
  templateUrl: './notice_edit.component.html',
  styleUrls: ['./notice.component.scss']
})

export class NoticeEditComponent implements OnInit {

	constructor(private httpService: HttpService) {

	}

	/**
  * 初始化
  */
  ngOnInit() {
  }

}
