import { Component, OnInit,AfterContentInit,OnDestroy,ViewChild } from '@angular/core'
import { HttpService } from '../../common/util/http.service'

import { UEditorComponent } from 'ngx-ueditor'

declare const UE: any;

@Component({
  selector: 'c-sitecfg-notice',
  templateUrl: './notice_edit.component.html',
  styleUrls: ['./notice.component.scss']
})

export class NoticeEditComponent implements OnInit {
  
  @ViewChild('full') full: UEditorComponent
  
  full_source: string

  config_source: string
  config: any = {
      toolbars: [['FullScreen', 'Source', 'Undo', 'Redo', 'Bold' ]],
      autoClearinitialContent: true,
      wordCount: false
  }
	
  constructor(private httpService: HttpService) {

	}

	/**
  * 初始化
  */
  ngOnInit() {
    
  }

  ngAfterViewInit() {
    // this.ueditor = UM.getEditor('textdescription', {'initialFrameHeight': 580})
  }

  ngOnDestroy(): void {
  }

}
