import { Component, OnInit, Output, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup, 
  FormBuilder,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { GridComponent } from '../common/lib/grid/grid.component';

@Component({
  selector: 'c-test-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnInit {
	
	@ViewChild('testGrid')
  testGrid: GridComponent; 

  url: String = "admin/noticelist";

  testGridHeaders: any;

  searchParams: any  = {
    title: ''
  };

  testForm: FormGroup;
	constructor(private router: Router, private formBuilder: FormBuilder) {
    this.testGridHeaders = [
      {'key':'id', 'name': 'xxx','keyType': true, 'width': 'col-sm-1'},
      {'key':'column_type_name', 'name': 'xxx1', 'width': 'col-sm-2'},
      {'key':'title', 'name': 'xxx2', 'deleteTitle': true, 'width': 'col-sm-3'},
      {'key':'add_time', 'name': 'xxx3', 'width': 'col-sm-1', 'date':true}
    ];

    let emailFc = new FormControl('',
      Validators.compose([Validators.required,Validators.minLength(5), Validators.maxLength(15)]))
    let passwordFc = new FormControl('', Validators.compose([Validators.required,Validators.minLength(5), Validators.maxLength(15)]))
      this.testForm = this.formBuilder.group({
        email: emailFc,
        password: passwordFc
      });
	}

  ngOnInit() {

  }
 

  tip() {
   
  }

  exception() {
  
  }

  confirm(){
  
  }
}
