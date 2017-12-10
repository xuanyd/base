import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { HttpService } from '../common/util/http.service';

@Component({
  selector: 'c-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    
    private loginBtnDisable:string=''
    private loginForm: FormGroup
    private loginValid: boolean = true

    constructor(private router: Router, 
      private httpService: HttpService, private formBuilder: FormBuilder) {
    let userNameFc = new FormControl('admin', 
      Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(15)]));
    let passwordFc = new FormControl('123456',
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
      if (!this.loginForm.valid)
        return
      let that = this;
      that.loginBtnDisable = 'disabled'
      that.httpService.get("http://localhost:8081/admin/login", {
        username: this.loginForm.value.userName,
        password: this.loginForm.value.password
      }, function (successful, data, res) {
        that.loginBtnDisable = ''
        if (successful) {
          if (data.flag!='success') {
            that.loginValid = false
            return
          }
          that.router.navigate(['/app/home']);
        }
      }, function (successful, msg, err) {
      })
  	}

}