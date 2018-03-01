import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  hotSelect: boolean = true;
  plateSelect: boolean = false;

  constructor(private router: Router){

  }
  
  ngOnInit() {

  }

  changePath(path) {
    if(path === 'plate'){
      this.plateSelect = true;
      this.hotSelect = false;
      this.router.navigate(['/main/community/plate']);
    } else if(path === 'hot'){
      this.hotSelect = true;
      this.plateSelect = false;
      this.router.navigate(['/main/community/hot']);
    }
  }
}
