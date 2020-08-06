import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonService } from "../service/common.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // @Output() shareDataEvent = new EventEmitter();
  // istoolbarActive: boolean;
  // constructor(private data: CommonService) { }
  ngOnInit() {
  }
  toogleLeftBar(){
    // this.istoolbarActive = !this.istoolbarActive;
    // this.shareDataEvent.emit(this.istoolbarActive);
  }

}
