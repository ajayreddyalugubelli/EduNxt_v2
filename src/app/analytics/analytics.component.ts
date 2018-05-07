import { Component, OnInit } from '@angular/core';

import { LearnDevelopComponent } from "./learn-develop/learn-develop.component";

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  learnDevelop:boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
