import { Component, OnInit } from '@angular/core';

import { HeaderComponent } from "../header/header.component";
import { TimeFrameComponent } from "../time-frame/time-frame.component";
import { AnalyticsComponent } from "../analytics/analytics.component";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
