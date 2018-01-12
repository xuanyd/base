import { Component, OnInit,AfterContentInit,OnDestroy,ViewChild } from '@angular/core'
import { HttpService } from '../../common/util/http.service'
import { Router,ActivatedRoute } from '@angular/router'
/*import { UEditorComponent } from 'ngx-ueditor'

declare const UE: any;*/

@Component({
  selector: 'c-sitecfg-notice',
  templateUrl: './notice-edit.component.html',
  styleUrls: ['./notice.component.scss']
})

export class NoticeEditComponent implements OnInit {
  
 /* @ViewChild('full') full: UEditorComponent
  
  full_source: string

  config_source: string
  config: any = {
      toolbars: [['FullScreen', 'Source', 'Undo', 'Redo', 'Bold' ]],
      autoClearinitialContent: true,
      wordCount: false
  }
	*/
  constructor(private router: Router,private acRouter: ActivatedRoute, private httpService: HttpService) {
    console.log(this.acRouter.params['value']['id'])
	}

	/**
  * 初始化
  */
  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  ngOnDestroy(): void {
  }

  back() {
   this.router.navigate(['/app/sitecfg/notice'])
  }

}
