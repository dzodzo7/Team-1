import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'survey-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: string = 'username';

  constructor() { }

  ngOnInit() {
  }

}
