import { Component, OnInit,Output, ViewEncapsulation,ViewChild,ElementRef } from '@angular/core'
import { HttpService } from '../../common/util/http.service'
import { Router } from '@angular/router'
import { Pagination } from '../../common/page/pagination'

@Component({
  selector: 'c-sitecfg-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class NoticeComponent implements OnInit {

  noticeList:string
  pageInfo:string
  selDisabled = "disabled"
  selectId =""
  @Output()
  public pagination:Pagination = Pagination.defaultPagination

	constructor(private router: Router,private httpService: HttpService,private el: ElementRef) {

	}

  ngOnInit() {
  	this.getNoticeList()
    this.pagination.changePage = (() => {
      this.getNoticeList()
    })
  }

  getNoticeList() {
  	let that = this
  	let page = this.pagination.currentPage
    this.httpService.get("http://localhost:8081/admin/noticelist", {
      page:page
  	}, function (successful, data, res) {
      if (successful) {
        if (data.flag=='1000') {
        	that.noticeList = data.pageInfo.infoList
        	that.pageInfo = data.pageInfo
          that.pagination.totalItems = data.pageInfo.totalCount
        }
      }
    }, function (successful, msg, err) {
    	console.log(err);
    })
  }

  toEdit() {
    this.router.navigate(['/app/sitecfg/notice-edit'])
  }

  toAdd(){
   this.router.navigate(['/app/sitecfg/notice-add'])
  }

  toDelete() {
    alert("确认删除？")
  }

  select(id) {
    this.selectId = id
    this.selDisabled=""
  }

  page() {
  	this.noticeList = null
  }
}
