import {Component, Input, DoCheck} from "@angular/core";

import { Modal } from "./modal";

@Component({
  selector: 'modal',
  templateUrl: "./modal.component.html"
})
export class ModalComponent implements DoCheck{

  @Input()
  public modal:Modal;

  public title: String;
  public content: String;

  public showStyle: String='block';

  ngDoCheck():void {
    console.log('modal do check')
    console.log(this.modal)
  }

  close() {
  	this.showStyle = 'none'
  }
}