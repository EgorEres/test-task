import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  activButton = 'payments'

  constructor() { }

  ngOnInit() {
  }

  headerMenuClick(type) {
    this.activButton = type
  }


}
