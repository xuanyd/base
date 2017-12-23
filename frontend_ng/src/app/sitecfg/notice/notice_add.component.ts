import { Component, OnInit,AfterContentInit,OnDestroy,ViewChild } from '@angular/core'
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
  
  @ViewChild('full') full: UEditorComponent
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
	
  constructor(private router: Router,private httpService: HttpService) {

	}

	/**
  * 初始化
  */
  ngOnInit() {
    console.log('----------')
  }

  ngOnDestroy(): void {
  }

  back() {
   this.router.navigate(['/app/sitecfg/notice'])
  }

}
