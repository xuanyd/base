import { Component, OnInit} from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'c-test-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnInit {


  
	constructor(private router: Router) {

	}

  ngOnInit() {
  	console.log('layout init..')
  }
}
