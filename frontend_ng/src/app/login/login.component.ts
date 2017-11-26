import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

// import { HttpService } from '../shared/http/http.service';

// import { ToastService } from '../shared/toast/toast.service';
// import { ToastConfig, ToastType } from '../shared/toast/toast-model';
// import { CustomValidators } from '../shared/custom-validator/custom-validator'


@Component({
  selector: 'c-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private router: Router) {

    }

  	/**
  	* 初始化
  	*/
  	ngOnInit() {

  	}

  	login() {
  		alert('login ');
  		this.router.navigate(['/app/home']);
  	}

}