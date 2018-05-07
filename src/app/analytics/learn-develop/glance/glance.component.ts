import { Component, OnInit } from '@angular/core';

import { ActiveUsersComponent } from "./active-users/active-users.component";
import { LearnerEngagementComponent } from "./learner-engagement/learner-engagement.component";

@Component({
  selector: 'app-glance',
  templateUrl: './glance.component.html',
  styleUrls: ['./glance.component.css']
})
export class GlanceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
