import {Component, Input, DoCheck} from "@angular/core";

import { SelectTree } from "./select-tree";

@Component({
  selector: 'select-tree',
  templateUrl: "./select-tree.component.html"
})
export class SelectTreeComponent implements DoCheck{

  @Input()
  public selectTree:SelectTree

  public treeData: Object

  public changeSelect(): void{
   
  }

  public initSelectTreeList():void {
    console.log(this.treeData)
  }

  ngDoCheck():void {
    this.initSelectTreeList();
  }
}