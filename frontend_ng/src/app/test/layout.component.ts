import { Component, OnInit, Output} from '@angular/core'
import { Router } from '@angular/router'
import { Pagination } from '../common/page/pagination'
import { SelectTree } from '../common/select-tree/select-tree'
import { Modal } from '../common/modal/modal'


@Component({
  selector: 'c-test-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnInit {
	
	@Output()
  public pagination:Pagination = Pagination.defaultPagination

  @Output()
  public selectTree:SelectTree = SelectTree.defaultSelectTree

  @Output()
  public modal:Modal = Modal.defaultModal

 

	constructor(private router: Router) {
    
	}

  ngOnInit() {
    this.selectTree.treeData = [{id:1,name:'测试'},{id:2,name:'测试'}]
    this.selectTree.treeName = 'testTreeName'
    this.initJobExceptionList();
    this.pagination.changePage = (() => {
      this.initJobExceptionList();
    });
  }
  initJobExceptionList(){
    this.pagination.totalItems = 60;
  }

  tip() {
  }

  confirm(){
    alert(456)
  }
}
