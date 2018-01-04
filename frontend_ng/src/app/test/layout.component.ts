import { Component, OnInit, Output} from '@angular/core'
import { Router } from '@angular/router'
import { Pagination } from '../common/page/pagination'

@Component({
  selector: 'c-test-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnInit {
	
	@Output()
  public pagination:Pagination = Pagination.defaultPagination;
	constructor(private router: Router) {

	}

  ngOnInit() {
  	console.log('layout init..')
  }
}
