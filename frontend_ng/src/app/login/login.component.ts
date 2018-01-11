import { Component, OnInit} from '@angular/core'
import { Router } from '@angular/router'
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms'
import { HttpService } from '../common/util/http.service'
import { LocalStorage } from '../common/storage/local.storage'


@Component({
  selector: 'c-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginBtnDisable:string=''
  loginForm: FormGroup
  loginValid: boolean = true
  connectionValid: boolean = true
  connectErrMsg: string=''
  constructor(private router: Router, 
    private ls: LocalStorage,
    private httpService: HttpService, private formBuilder: FormBuilder) {
    let userNameFc = new FormControl('admin', 
      Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(15)]));
    let passwordFc = new FormControl('123',
      Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)]));
    this.loginForm = this.formBuilder.group({
      userName: userNameFc,
      password: passwordFc
    });
  }

  	/**
  	* 初始化
  	*/
	ngOnInit() {
	}

	login() {
    /*this.ls.setObject('username','xuanyd')
    this.router.navigate(['/app/home'])*/
    if (!this.loginForm.valid)
      return
    let that = this;
    that.loginBtnDisable = 'disabled';
    this.httpService.request({
      method: "POST",
      url: "http://localhost:8081/admin/login",
      data: {
        username: this.loginForm.value.userName,
        password: this.loginForm.value.password
      }
    })
	}
}