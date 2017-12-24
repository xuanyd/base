import { Component, OnInit,AfterContentInit,OnDestroy,ViewChild } from '@angular/core'
import { Validators, FormControl, FormGroup, FormBuilder,FormsModule,ReactiveFormsModule } from '@angular/forms'
import { HttpService } from '../../common/util/http.service'
import { Router } from '@angular/router'

import { UEditorComponent } from 'ngx-ueditor'

declare const UE: any;
@Component({
  selector: 'c-sitecfg-notice',
  templateUrl: './notice_add.component.html',
  styleUrls: ['./notice.component.scss']
})

export class NoticeAddComponent implements OnInit {
  
  private noticeAddForm: FormGroup

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
      let noticeTypeFc = new FormControl('admin', Validators.compose([Validators.required]))
      let titleFc = new FormControl('admin', Validators.compose([Validators.required]))
      let contentFc = new FormControl('admin', Validators.compose([Validators.required]))
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
    let that = this
    window.onresize = function () {
      //that.UE.getEditor('aaa', { initialFrameWidth: null })
      console.log(that.full.Instance)
      that.full.Instance.reset()
    }
  }

  ngOnDestroy(): void {
  }

  add() {
    console.log(this.noticeAddForm.value.noticeType)
    console.log(this.noticeAddForm.value.title)
    console.log(this.full_source)
  }

  back() {
   this.router.navigate(['/app/sitecfg/notice'])
  }

}
