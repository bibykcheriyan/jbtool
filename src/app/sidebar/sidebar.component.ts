import { Component, OnInit } from '@angular/core';
import { CommonService } from "../service/common.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor(private data: CommonService) { }
  istoolbarActive: boolean;
  ngOnInit() {
  }
  sendData(data: boolean) {
    this.istoolbarActive = data;
  }

}
