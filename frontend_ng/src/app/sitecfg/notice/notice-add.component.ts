import { Component, OnInit,AfterContentInit,OnDestroy,ViewChild } from '@angular/core'
import { Validators, FormControl, FormGroup, FormBuilder,FormsModule,ReactiveFormsModule } from '@angular/forms'
import { HttpService } from '../../common/util/http.service'
import { Router } from '@angular/router'

import { UEditorComponent } from 'ngx-ueditor'

declare const UE: any;
@Component({
  selector: 'c-sitecfg-notice',
  templateUrl: './notice-add.component.html',
  styleUrls: ['./notice.component.scss']
})

export class NoticeAddComponent implements OnInit {
  
  noticeAddForm: FormGroup
  columnList:string
  addBtnDisable:string=''
  
  @ViewChild('full') 
  full: UEditorComponent
  full_source: string

  config_source: string;
    config: any = {
        toolbars: [['FullScreen', 'Source', 'Undo', 'Redo', 'Bold' ]],
        autoClearinitialContent: true,
        wordCount: false
    };

    form_source: string;

    custom_source: string;
    custom: any = {
        toolbars: [['FullScreen', 'Source', 'Undo', 'Redo', 'Bold', 'button']]
    };
	
  constructor(private router: Router, private httpService: HttpService,
      private formBuilder: FormBuilder) {
      let noticeTypeFc = new FormControl('', Validators.compose([Validators.required]))
      let titleFc = new FormControl('', Validators.compose([Validators.required,Validators.minLength(5), Validators.maxLength(15)]))
      let contentFc = new FormControl('', Validators.compose([Validators.required]))
      this.noticeAddForm = this.formBuilder.group({
        noticeType: noticeTypeFc,
        title: titleFc,
        content: contentFc
      });
    }

	/**
  * 初始化
  */
  ngOnInit() {
    this.getColumnList()
  }

  ngOnDestroy(): void {
  }

  add() {
    if (!this.noticeAddForm.valid)
      return
    let that = this;
    that.addBtnDisable = 'disabled'
    that.httpService.get("http://localhost:8081/admin/notice-add", {
      noticeType: that.noticeAddForm.value.noticeType,
      title: that.noticeAddForm.value.title,
      content: that.full.Instance.getContent()
    }, function (successful, data, res) {
      that.addBtnDisable = ''
      if (successful) {
        if (data.flag!='1000') {
          alert(data.msg)
          return
        } else {
          alert("保存成功")
        }
      }
    }, function (successful, msg, err) {
      that.addBtnDisable = ''
    })
  }

  getColumnList() {
    let that = this
      this.httpService.get("http://localhost:8081/admin/columnlist", {
    }, function (successful, data, res) {
      if (successful) {
        console.log(data)
        if (data.flag == '1000') {
          that.columnList = data.columnList
          console.log(that.columnList)
        }
      }
    }, function (successful, msg, err) {
      console.log(err);
    })
  }

  back() {
    this.router.navigate(['/app/sitecfg/notice'])
  }

}
